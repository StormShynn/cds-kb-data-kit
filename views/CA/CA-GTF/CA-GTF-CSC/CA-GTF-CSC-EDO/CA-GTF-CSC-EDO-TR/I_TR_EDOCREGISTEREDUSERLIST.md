---
name: I_TR_EDOCREGISTEREDUSERLIST
description: TR Edocregistereduserlist
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
# I_TR_EDOCREGISTEREDUSERLIST

**TR Edocregistereduserlist**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-TR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TR_ElectronicDocTaxID` | `TR_ElectronicDocTaxID` |
| key `TR_EDocBusinessPartnerAlias` | `TR_EDocBusinessPartnerAlias` |
| key `TR_EDocMasterID` | `TR_EDocMasterID` |
| key `TR_EDocBusinessPartnerType` | `TR_EDocBusinessPartnerType` |
| `TR_EDocTaxpayerName` | `TR_EDocTaxpayerName` |
| `TR_EDocTaxPayerIdnType` | `TR_EDocTaxPayerIdnType` |
| `TR_ElectronicDocumentScenario` | `TR_ElectronicDocumentScenario` |
| `TR_EDocFirstAliasRegnDateData` | `TR_EDocFirstAliasRegnDateData` |
| `TR_EDocFirstAliasRegnTimeData` | `TR_EDocFirstAliasRegnTimeData` |
| `TR_EDocIsDefaultAlias` | `TR_EDocIsDefaultAlias` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'eDocument TR Registration Information'
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
                           #CDS_MODELING_ASSOCIATION_TARGET]                        
                           }
define view entity I_TR_EDocRegisteredUserList as select from R_TR_EDocRegisteredUserList
{
  key TR_ElectronicDocTaxID,
  key TR_EDocBusinessPartnerAlias,
  key TR_EDocMasterID,
  key TR_EDocBusinessPartnerType,
  TR_EDocTaxpayerName,
  TR_EDocTaxPayerIdnType,
  TR_ElectronicDocumentScenario,
  TR_EDocFirstAliasRegnDateData,
  TR_EDocFirstAliasRegnTimeData,
  TR_EDocIsDefaultAlias
}
```
