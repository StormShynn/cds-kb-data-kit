---
name: I_PURGSAFETYDATASHEETSTATUS
description: "Purgsafetydatasheetstatus"
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
# I_PURGSAFETYDATASHEETSTATUS

**Purgsafetydatasheetstatus**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurgSafetyDataSheetStatus` | ✓ | |  | `cast( dd07l.domvalue_l as mmpur_pc_status_sds )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPGPCSDSSTAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Compliance Status of Safety Data Sheet'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'PurgSafetyDataSheetStatus'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name:'PurgSafetyDataSheetStatus'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_PurgSafetyDataSheetStatus 
  as select from dd07l 
  composition [0..*] of I_PurgSafetyDataSheetStatusT as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as mmpur_pc_status_sds ) as PurgSafetyDataSheetStatus,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      _Text
} 
where dd07l.domname  = 'MMPUR_PC_STATUS_SDS'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
