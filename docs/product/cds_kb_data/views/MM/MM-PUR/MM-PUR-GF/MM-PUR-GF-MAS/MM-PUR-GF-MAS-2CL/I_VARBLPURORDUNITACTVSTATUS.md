---
name: I_VARBLPURORDUNITACTVSTATUS
description: "Varblpurordunitactvstatus"
app_component: MM-PUR-GF-MAS-2CL
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
  - MM-PUR-GF
  - interface-view
  - status
  - component:MM-PUR-GF-MAS-2CL
  - lob:Sourcing & Procurement
---
# I_VARBLPURORDUNITACTVSTATUS

**Varblpurordunitactvstatus**

| Property | Value |
|---|---|
| App Component | `MM-PUR-GF-MAS-2CL` |
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
| `VarblPurOrdUnitIsActive` | ✓ | |  | `cast( dd07l.domvalue_l as vabme )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IVARPOUNITACTSTS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'VarblPurOrdUnitIsActive'
@ObjectModel.sapObjectNodeType.name: 'VarblPurOrdUnitStatus'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Variable PO Unit Active Status'
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
define root view I_VarblPurOrdUnitActvStatus
  as select from dd07l
  composition [0..*] of I_VarblPurOrdUnitActvStatusTxt as _Text
{
      @ObjectModel.text.association: '_Text'  
      @Search.ranking: #HIGH 
  key cast( dd07l.domvalue_l as vabme ) as VarblPurOrdUnitIsActive,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW  
      dd07l.domvalue_l                  as DomainValue,
      @Search.ranking: #LOW
      _Text
}
where
      dd07l.domname  = 'VABME'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
