---
name: DDCDS_CUSTOMER_DOMAIN_VALUE_T
description: "Ddcds Customer Domain Value T"
semantic_vi: "Chứa các giá trị miền khách hàng, được sử dụng để lưu trữ và quản lý dữ liệu khách hàng theo một định dạng cấu trúc. View này có thể được sử dụng để lấy và thao tác các giá trị miền khách hàng cho các mục đích kinh doanh khác nhau."
keywords:
  - "customer domain"
  - "customer data"
  - "structured data"
  - "sap cds view"
  - "ddcds customer domain value t"
  - "bc-dwb-dic"
  - "basis components"
  - "customer management"
semantic_en: "Exposes customer domain values, which are used to store and manage customer-specific data in a structured format. This view can be used to retrieve and manipulate customer domain values for various business purposes."
app_component: BC-DWB-DIC
software_component: SAP_BASIS
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-DWB
  - BC-DWB-DIC
  - text-view
  - customer
  - component:BC-DWB-DIC
  - lob:Basis Components
  - bo:Customer
---
# DDCDS_CUSTOMER_DOMAIN_VALUE_T

**Ddcds Customer Domain Value T**

| Property | Value |
|---|---|
| App Component | `BC-DWB-DIC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `domain_name` | ✓ | |  | `cast(dd07t.domname as abap.char(30))` |  |  |
| `value_position` | ✓ | |  | `cast(dd07t.valpos as abap.numc(4))` |  |  |
| `language` | ✓ | |  | `ddlanguage` |  |  |
| `value_low` |  | |  | `domvalue_l` |  |  |
| `text` |  | |  | `ddtext` |  |  |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'DDCDS_CUSTDFVT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
define view entity DDCDS_CUSTOMER_DOMAIN_VALUE_T
  with parameters
    p_domain_name : sxco_ad_object_name --abap.char(30)
  as select from dd07t
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DOMA'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = dd07t.domname
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = $parameters.p_domain_name

{
  key cast(dd07t.domname as abap.char(30)) as domain_name,
  key cast(dd07t.valpos  as abap.numc(4))  as value_position,
  key dd07t.ddlanguage                     as language,
      dd07t.domvalue_l                     as value_low,
      dd07t.ddtext                         as text
}
where
  dd07t.as4local = 'A'
```
