---
name: I_TR_EDOCNUMBERCODEDESCRIPTION
description: "TR Edocnumbercodedescription"
app_component: CA-GTF-CSC-EDO-TR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
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
  - text-view
  - component:CA-GTF-CSC-EDO-TR
  - lob:Cross-Application Components
---
# I_TR_EDOCNUMBERCODEDESCRIPTION

**TR Edocnumbercodedescription**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-TR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TR_EDocLanguageKey` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `TR_EDocBusinessPartnerAlias` | ✓ | |  |  |  |  |
| `TR_ElectronicDocumentUnivCode` | ✓ | |  |  |  |  |
| `TR_EDocUnivCodeText` |  | |  |  |  |  |
| `TR_ElectronicDocCompanyCode` |  | | `_CompanyCode` | `CompanyCode` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'eDocument TR Number Group Description'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
 @ObjectModel:{
 usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MASTER },
supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET
                           ]
}    
define view entity I_TR_EDocNumberCodeDescription as select from R_TR_EDocNumberCodeDescription
association [1..1] to I_CompanyCode as _CompanyCode
on R_TR_EDocNumberCodeDescription.CompanyCode = _CompanyCode.CompanyCode
{
@Semantics.language: true
  key TR_EDocLanguageKey,
  key CompanyCode,
  key TR_EDocBusinessPartnerAlias,
  key TR_ElectronicDocumentUnivCode,
  @Semantics.text: true
  TR_EDocUnivCodeText,
  _CompanyCode.CompanyCode as TR_ElectronicDocCompanyCode
}
```
