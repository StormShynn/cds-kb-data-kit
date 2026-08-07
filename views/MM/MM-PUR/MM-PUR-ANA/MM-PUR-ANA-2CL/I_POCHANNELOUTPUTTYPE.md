---
name: I_POCHANNELOUTPUTTYPE
description: "Pochanneloutputtype"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_POCHANNELOUTPUTTYPE

**Pochanneloutputtype**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrderOutputIsAutomated` | ✓ | |  | `cast ( dd07l.domvalue_l as mm_a_output_channel_type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_POChannelOutputTypeTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPOCOPTYP'
@EndUserText.label: 'PO of Output Type Automatic or Manual'
@ObjectModel.representativeKey: 'PurchaseOrderOutputIsAutomated'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory:#DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
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
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'PurchaseOrder'
define view I_POChannelOutputType
   
as select from dd07l 
association [0..*] to I_POChannelOutputTypeTxt as _Text on 
        _Text.PurchaseOrderOutputIsAutomated = $projection.PurchaseOrderOutputIsAutomated {
     @ObjectModel.text.association: '_Text'
     @Semantics.booleanIndicator
  key  cast ( dd07l.domvalue_l as mm_a_output_channel_type ) as PurchaseOrderOutputIsAutomated,
     @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      _Text
}

where
      dd07l.domname  = 'OUTPUT_CHANNEL_TYPE'
      and dd07l.as4local = 'A' 
      and dd07l.as4vers  = '0000'
```
