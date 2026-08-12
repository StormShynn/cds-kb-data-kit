---
name: I_PRICINGDATECONTROL
description: "Pricingdatecontrol"
app_component: MM
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
  - interface-view
  - pricing
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PRICINGDATECONTROL

**Pricingdatecontrol**

| Property | Value |
|---|---|
| App Component | `MM` |
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
| `PricingDateControl` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as meprf )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IMMPRCDATCNTRL'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #META
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Analytics.dataCategory:#DIMENSION
@Analytics.dataExtraction.enabled:true
@ObjectModel.sapObjectNodeType.name: 'PricingDateControl'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'PricingDateControl'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Control of Pricing Date'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define root view I_PricingDateControl
  as select from dd07l
  composition [0..*] of I_PricingDateControlTxt as _Text
{

      @ObjectModel.text.association: '_Text'
  key cast( substring( domvalue_l, 1, 1 ) as meprf ) as PricingDateControl,

      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                               as DomainValue,

      _Text
}
where
      domname       = 'MEPRF'
  and as4local      = 'A'
  and dd07l.as4vers = '0000'
```
