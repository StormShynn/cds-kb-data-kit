---
name: I_TR_EDOCUNICODENUMBERRANGEGRP
description: TR Edocunicodenumberrangegrp
app_component: CA-GTF-CSC-EDO-TR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-TR
  - lob:Cross-Application Components
---
# I_TR_EDOCUNICODENUMBERRANGEGRP

**TR Edocunicodenumberrangegrp**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-TR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `CompanyCode` |
| key `TR_EDocBusinessPartnerAlias` | `TR_EDocBusinessPartnerAlias` |
| key `TR_ElectronicDocumentUnivCode` | `TR_ElectronicDocumentUnivCode` |
| key `TR_EDocNumberRange` | `TR_EDocNumberRange` |
| `TR_EDocUnivCodeText` | `TR_EDocUnivCodeText` |
| `TR_ElectronicDocCompanyCode` | `_CompanyCode.CompanyCode` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'eDocument TR Unicode Number Range Group'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
 @ObjectModel:{
 usageType:{
  serviceQuality: #D,
  sizeCategory: #M,
  dataClass: #MASTER },
supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET
                           ]
}    
define view entity I_TR_EDocUniCodeNumberRangeGrp as select from R_TR_EDocUniCodeNumberRangeGrp
association [1..1] to I_CompanyCode as _CompanyCode
on R_TR_EDocUniCodeNumberRangeGrp.CompanyCode = _CompanyCode.CompanyCode
{
  key CompanyCode,
  key TR_EDocBusinessPartnerAlias,
  key TR_ElectronicDocumentUnivCode,
  key TR_EDocNumberRange,
  TR_EDocUnivCodeText,
  _CompanyCode.CompanyCode as TR_ElectronicDocCompanyCode
}
```
