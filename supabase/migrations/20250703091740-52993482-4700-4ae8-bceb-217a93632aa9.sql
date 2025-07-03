
-- Insert admin user with specific credentials
-- Note: This creates a profile entry. The actual auth user will need to be created through the signup process
-- with email: usmanhospital@gujranwala.com and password: USMAN.hospital@U

-- First, let's create a function to promote a user to admin after they sign up
CREATE OR REPLACE FUNCTION public.promote_to_admin(user_email TEXT)
RETURNS VOID
LANGUAGE PLPGSQL
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.profiles 
  SET role = 'admin'
  WHERE email = user_email;
END;
$$;

-- Automatically promote the hospital admin email to admin role when they sign up
CREATE OR REPLACE FUNCTION public.check_admin_email()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
AS $$
BEGIN
  -- Check if the new user has the admin email
  IF NEW.email = 'usmanhospital@gujranwala.com' THEN
    -- Update their role to admin
    UPDATE public.profiles 
    SET role = 'admin'
    WHERE id = NEW.id;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger to automatically set admin role for the hospital email
DROP TRIGGER IF EXISTS auto_admin_role ON public.profiles;
CREATE TRIGGER auto_admin_role
  AFTER INSERT ON public.profiles
  FOR EACH ROW 
  EXECUTE FUNCTION public.check_admin_email();
