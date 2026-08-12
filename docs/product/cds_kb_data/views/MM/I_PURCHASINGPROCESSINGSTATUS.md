---
name: I_PURCHASINGPROCESSINGSTATUS
description: "Purchasingprocessingstatus"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - status
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURCHASINGPROCESSINGSTATUS

**Purchasingprocessingstatus**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingProcessingStatus` | ✓ | |  | `cast ( domvalue_l as meprocstate )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPURGPROCSTAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Purchasing Processing Status' //same as DDL description
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'PurchasingProcessingStatus'
@ObjectModel.semanticKey: 'PurchasingProcessingStatus'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name:'PurchasingProcessingStatus'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION


define root view I_PurchasingProcessingStatus
  as select from dd07l

  composition [0..*] of I_PurgProcessingStatusText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as meprocstate ) as PurchasingProcessingStatus,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                   as DomainValue,
      _Text
}
where
      dd07l.domname  = 'MEPROCSTATE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
