---
name: I_TR_EDOCCOMPANYDATA
description: "TR Edoccompanydata"
app_component: CA-GTF-CSC-EDO-TR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_TR_EDOCCOMPANYDATA

**TR Edoccompanydata**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-TR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `TR_EDocBusinessPartnerAlias` | ✓ | |  |  |  |  |
| `TR_ElectronicDocTaxID` | ✓ | |  |  |  |  |
| `TR_ElectronicDocumentRole` | ✓ | |  |  |  |  |
| `TR_EDocTaxpayerName` |  | |  |  |  |  |
| `TR_EDocTaxpayerType` |  | |  |  |  |  |
| `TR_EDocFirstAliasRegnDateData` |  | |  |  |  |  |
| `TR_EDocFirstAliasRegnTimeData` |  | |  |  |  |  |
| `TR_EDocIsDefaultAlias` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'eDocument Turkey Company Information'
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
define view entity I_TR_EDocCompanyData as select from R_TR_EDocCompanyInformation
{
  key CompanyCode,
  key TR_EDocBusinessPartnerAlias,
  key TR_ElectronicDocTaxID,
  key TR_ElectronicDocumentRole,
  TR_EDocTaxpayerName,
  TR_EDocTaxpayerType,
  TR_EDocFirstAliasRegnDateData,
  TR_EDocFirstAliasRegnTimeData,
  TR_EDocIsDefaultAlias
}
```
