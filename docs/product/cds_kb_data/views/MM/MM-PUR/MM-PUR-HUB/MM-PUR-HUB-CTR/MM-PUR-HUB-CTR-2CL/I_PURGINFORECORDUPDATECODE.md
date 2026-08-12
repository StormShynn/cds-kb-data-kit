---
name: I_PURGINFORECORDUPDATECODE
description: "Purginforecordupdatecode"
app_component: MM-PUR-HUB-CTR-2CL
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
  - MM-PUR-HUB
  - interface-view
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_PURGINFORECORDUPDATECODE

**Purginforecordupdatecode**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
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
| `PurchasingInfoRecordUpdateCode` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as spinf )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_PurgInfoRecordUpdateCodeT` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IINFORECUPDCODE'
@Analytics.dataCategory:#DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Update Code for Purchasing Info Record'
@ObjectModel.semanticKey: [ 'PurchasingInfoRecordUpdateCode' ]
@ObjectModel.representativeKey: 'PurchasingInfoRecordUpdateCode'
@ObjectModel.sapObjectNodeType.name: 'PurchasingInfoRecordUpdateCode'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataExtraction.enabled: true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define root view I_PurgInfoRecordUpdateCode as select from dd07l
composition [0..*] of I_PurgInfoRecordUpdateCodeT as _PurgInfoRecordUpdateCodeT 
{
  @ObjectModel.text.association: '_PurgInfoRecordUpdateCodeT'
  key cast ( substring( domvalue_l, 1, 1 ) as spinf ) as PurchasingInfoRecordUpdateCode,
  
  @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                               as DomainValue,

    _PurgInfoRecordUpdateCodeT
}
where
      domname  = 'SPINF'
      and as4local = 'A' 
      and dd07l.as4vers = '0000'
```
