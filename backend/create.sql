create table tb_solicitacao (id int8 generated by default as identity, json_pedido varchar(255), primary key (id));
create table tb_solicitacao (id int8 generated by default as identity, json_pedido oid, primary key (id));
create table tb_solicitacao (id int8 generated by default as identity, json_pedido oid, primary key (id));
create table tb_solicitacao (id int8 generated by default as identity, json_pedido text, primary key (id));
create table tb_solicitacao (id int8 generated by default as identity, json_pedido text, primary key (id));
create table tb_role (id int8 generated by default as identity, role_authority varchar(255) not null, primary key (id));
create table tb_solicitacao (id int8 generated by default as identity, json_pedido text, primary key (id));
create table tb_user (id uuid not null, password varchar(255) not null, username varchar(255) not null, primary key (id));
create table tb_users_roles (user_id uuid not null, role_id int8 not null);
alter table if exists tb_role add constraint UK_7pi4fc21o4y6655j8e3udsmal unique (role_authority);
alter table if exists tb_user add constraint UK_4wv83hfajry5tdoamn8wsqa6x unique (username);
alter table if exists tb_users_roles add constraint FK6p4o2kxbq23rthm174k19xo2h foreign key (role_id) references tb_role;
alter table if exists tb_users_roles add constraint FK85qorv8qojsxvl1nv56vckxmj foreign key (user_id) references tb_user;
create table tb_role (id int8 generated by default as identity, role_authority varchar(255) not null, primary key (id));
create table tb_solicitacao (id int8 generated by default as identity, json_pedido text, primary key (id));
create table tb_user (id uuid not null, password varchar(255) not null, username varchar(255) not null, primary key (id));
create table tb_users_roles (user_id uuid not null, role_id int8 not null);
alter table if exists tb_role add constraint UK_7pi4fc21o4y6655j8e3udsmal unique (role_authority);
alter table if exists tb_user add constraint UK_4wv83hfajry5tdoamn8wsqa6x unique (username);
alter table if exists tb_users_roles add constraint FK6p4o2kxbq23rthm174k19xo2h foreign key (role_id) references tb_role;
alter table if exists tb_users_roles add constraint FK85qorv8qojsxvl1nv56vckxmj foreign key (user_id) references tb_user;
create table tb_role (id int8 generated by default as identity, role_authority varchar(255) not null, primary key (id));
create table tb_solicitacao (id int8 generated by default as identity, data date, json_pedido text, primary key (id));
create table tb_user (id uuid not null, password varchar(255) not null, username varchar(255) not null, primary key (id));
create table tb_users_roles (user_id uuid not null, role_id int8 not null);
alter table if exists tb_role add constraint UK_7pi4fc21o4y6655j8e3udsmal unique (role_authority);
alter table if exists tb_user add constraint UK_4wv83hfajry5tdoamn8wsqa6x unique (username);
alter table if exists tb_users_roles add constraint FK6p4o2kxbq23rthm174k19xo2h foreign key (role_id) references tb_role;
alter table if exists tb_users_roles add constraint FK85qorv8qojsxvl1nv56vckxmj foreign key (user_id) references tb_user;
create table tb_role (id int8 generated by default as identity, role_authority varchar(255) not null, primary key (id));
create table tb_solicitacao (id int8 generated by default as identity, data date, json_pedido text, primary key (id));
create table tb_user (id uuid not null, password varchar(255) not null, username varchar(255) not null, primary key (id));
create table tb_users_roles (user_id uuid not null, role_id int8 not null);
alter table if exists tb_role add constraint UK_7pi4fc21o4y6655j8e3udsmal unique (role_authority);
alter table if exists tb_user add constraint UK_4wv83hfajry5tdoamn8wsqa6x unique (username);
alter table if exists tb_users_roles add constraint FK6p4o2kxbq23rthm174k19xo2h foreign key (role_id) references tb_role;
alter table if exists tb_users_roles add constraint FK85qorv8qojsxvl1nv56vckxmj foreign key (user_id) references tb_user;
