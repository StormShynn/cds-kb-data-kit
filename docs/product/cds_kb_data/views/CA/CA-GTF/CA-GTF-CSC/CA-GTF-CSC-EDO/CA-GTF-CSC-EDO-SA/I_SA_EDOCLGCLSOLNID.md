---
name: I_SA_EDOCLGCLSOLNID
description: "SA Edoclgclsolnid"
app_component: CA-GTF-CSC-EDO-SA
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-SA
  - lob:Cross-Application Components
---
# I_SA_EDOCLGCLSOLNID

**SA Edoclgclsolnid**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-SA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'eDocument KSA for Logical Solution Unit'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #TRANSACTIONAL},
  supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #UI_PROVIDER_PROJECTION_SOURCE ],
  modelingPattern: #NONE
}
@VDM: {  
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl:
{
personalData.blocking: #BLOCKED_DATA_EXCLUDED ,
authorizationCheck: #MANDATORY
}

define view entity I_SA_EDocLgclSolnId as select from edosasolunit
{


  key bukrs           as CompanyCode,
  key vat_reg_num     as SA_EDocVATRegisterNumber,
  key invoice_type    as SA_EDocInvoiceType,
  key source_type     as SA_EDocSourceType,
  key seq_no          as SA_EDocCryptographicSqncNmbr,
      egs_id          as SA_EDocLgclSolnUUID,
      leading_company as SA_EDocLdngCompanyCode,
      org_unit        as SA_EDocOrganisationUnitId,
      org_name        as SA_EDocOrganizationName,
      location        as SA_EDocLocationName,
      industry        as SA_EDocIndustryName
}
```
