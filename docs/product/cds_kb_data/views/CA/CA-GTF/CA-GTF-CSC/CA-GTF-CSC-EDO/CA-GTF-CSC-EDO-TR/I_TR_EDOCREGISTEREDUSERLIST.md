---
name: I_TR_EDOCREGISTEREDUSERLIST
description: "TR Edocregistereduserlist"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TR_ElectronicDocTaxID` | ✓ | |  |  | `CHAR(11)` | eDocument Turkey: VKN/TCKN |
| `TR_EDocBusinessPartnerAlias` | ✓ | |  |  | `CHAR(255)` | Alias |
| `TR_EDocMasterID` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `TR_EDocBusinessPartnerType` | ✓ | |  |  | `CHAR(10)` | Business Partner Type |
| `TR_EDocTaxpayerName` |  | |  |  | `CHAR(80)` | Taxpayer Name |
| `TR_EDocTaxPayerIdnType` |  | |  |  | `CHAR(4)` | Taxpayer Type |
| `TR_ElectronicDocumentScenario` |  | |  |  | `CHAR(10)` | Scenario (Turkey) |
| `TR_EDocFirstAliasRegnDateData` |  | |  |  | `CHAR(28)` | Registration Date of First Alias Registered for VKN/TCKN |
| `TR_EDocFirstAliasRegnTimeData` |  | |  |  | `CHAR(28)` | Registration Date |
| `TR_EDocIsDefaultAlias` |  | |  |  | `CHAR(1)` | Default Alias |

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
