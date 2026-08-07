---
name: Z_B_CUSTOMER.DDLS
description: "DETAILS CUSTOMERS"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/CarlosGuzmanCG/ABAP_CLOUD/blob/a0d0eb81ed6eb4fa624ae7d43cb0ab95f59b53ad/src/z_b_customer.ddls.asddls
semantic_en: "DETAILS CUSTOMERS — CDS view based on zrent_cust_cg."
semantic_vi: "DETAILS CUSTOMERS — CDS view dựa trên zrent_cust_cg."
keywords:
  - "details"
  - "customers"
  - "matricula"
  - "nombre"
  - "apellido"
  - "correo"
tags:
  - RE
  - bo:businesspartner
  - component:RE
  - customer
---
# Z_B_CUSTOMER.DDLS

**DETAILS CUSTOMERS**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/CarlosGuzmanCG/ABAP_CLOUD/blob/a0d0eb81ed6eb4fa624ae7d43cb0ab95f59b53ad/src/z_b_customer.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ID` | ✓ | |  | `doc_id` |  |  |
| `Matricula` | ✓ | |  | `matricula` |  |  |
| `Nombre` |  | |  | `nombres` |  |  |
| `Apellido` |  | |  | `apellidos` |  |  |
| `Correo` |  | |  | `email` |  |  |
| `TipoContrato` |  | |  | `cntr_type` |  |  |

## Source Code

*Source: [https://github.com/CarlosGuzmanCG/ABAP_CLOUD/blob/a0d0eb81ed6eb4fa624ae7d43cb0ab95f59b53ad/src/z_b_customer.ddls.asddls](https://github.com/CarlosGuzmanCG/ABAP_CLOUD/blob/a0d0eb81ed6eb4fa624ae7d43cb0ab95f59b53ad/src/z_b_customer.ddls.asddls)*

```abap
@AbapCatalog.sqlViewName: 'ZV_DET_CUSTL_CG'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'DETAILS CUSTOMERS'
@Metadata.allowExtensions: true
define view Z_B_CUSTOMER
  as select from zrent_cust_cg
{
  key doc_id    as ID,
  key matricula as Matricula,
      nombres   as Nombre,
      apellidos as Apellido,
      email     as Correo,
      cntr_type as TipoContrato
}
```
