---
name: I_PURGQUOTAARRGMTAPI01
description: "Purgquotaarrgmtapi 01"
app_component: MM-PUR-SQ-QTA-2CL
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
  - MM
  - MM-PUR
  - MM-PUR-SQ
  - interface-view
  - component:MM-PUR-SQ-QTA-2CL
  - lob:Sourcing & Procurement
---
# I_PURGQUOTAARRGMTAPI01

**Purgquotaarrgmtapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-QTA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QuotaArrangement` | ✓ | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `MinQtyForSpltQuota` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `UserDescription` |  | |  |  |  |  |
| `MaterialBaseUnit` |  | |  |  |  |  |
| `_PurgQuotaArrgmtItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurgQuotaArrgmtItem` | `I_PurgQuotaArrgmtItemAPI01` | [1..*] |

## Source Code

```abap
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M

@ObjectModel.semanticKey:['QuotaArrangement']
@ObjectModel.representativeKey: 'QuotaArrangement'

@AbapCatalog.sqlViewName: 'IPURGQAAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Purchasing Quota Arrangement'

@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_PurgQuotaArrgmtAPI01 as select from I_PurgQuotaArrgmt 
  association [1..*] to I_PurgQuotaArrgmtItemAPI01 as _PurgQuotaArrgmtItem on $projection.QuotaArrangement = _PurgQuotaArrgmtItem.QuotaArrangement

{
  key QuotaArrangement,
  Material,
  Plant,
  
  @Semantics.businessDate.to: true
  ValidityEndDate,
  
  @Semantics.businessDate.from: true   
  ValidityStartDate,
  
  @Semantics.businessDate.createdAt : true 
  CreationDate,
  
  @Semantics.user.createdBy: true  
  CreatedByUser,
  
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  MinQtyForSpltQuota,
  
  LastChangeDateTime,
  
  UserDescription,
  
  MaterialBaseUnit,
  
  _PurgQuotaArrgmtItem

}
```
