ALTER TABLE IF EXISTS public."Logins"
    ADD COLUMN email character varying(100);
    ADD COLUMN uuid uuid;

ALTER TABLE IF EXISTS public."Logins"
    ADD CONSTRAINT uq_logins_emal UNIQUE (email);
	
UPDATE public."Logins" SET email = 'kitty@email.com' WHERE id = 2;
UPDATE public."Logins" SET email = 'puppy@email.com' WHERE id = 3;
UPDATE public."Logins" SET email = 'mini@email.com' WHERE id = 4;

UPDATE public."Logins" SET uuid='34797fd1-7743-4865-a7c8-69e01ab6f388' WHERE id = 2;
UPDATE public."Logins" SET uuid='5eac4668-ceb2-466d-950e-ce2f7d33e7fd' WHERE id = 3;
UPDATE public."Logins" SET uuid='a436be13-ac89-4b14-93f3-d7cd2ad18d4c' WHERE id = 4;

ALTER TABLE IF EXISTS public."Logins"
    ALTER COLUMN email SET NOT NULL;
    ALTER COLUMN uuid SET NOT NULL;