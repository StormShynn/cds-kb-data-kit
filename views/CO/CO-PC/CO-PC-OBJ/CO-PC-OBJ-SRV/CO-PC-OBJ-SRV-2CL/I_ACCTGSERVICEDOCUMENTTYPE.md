---
name: I_ACCTGSERVICEDOCUMENTTYPE
description: "ACCTGService DocumentUMENTTYPE"
app_component: CO-PC-OBJ-SRV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - service
  - document
  - component:CO-PC-OBJ-SRV-2CL
  - lob:Controlling
---
# I_ACCTGSERVICEDOCUMENTTYPE

**ACCTGService DocumentUMENTTYPE**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-SRV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentType` | ✓ | |  |  |  |  |
| `ServiceDocumentTypeName` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Accounting Service Document Type'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'ServiceDocumentType'
@ObjectModel.semanticKey: ['ServiceDocumentType']
@ObjectModel.supportedCapabilities: 
  [ #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE, 
    #CDS_MODELING_DATA_SOURCE,
    #VALUE_HELP_PROVIDER,
    #UI_PROVIDER_PROJECTION_SOURCE
  ]
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@VDM.viewType: #COMPOSITE
@Search.searchable: true
@Consumption.ranked: true

define view entity I_AcctgServiceDocumentType 
  as select from P_AcctgServiceDocumentItem
{
  @ObjectModel.text.element: ['ServiceDocumentTypeName']
  @UI.textArrangement: #TEXT_LAST
  @Search: { 
    defaultSearchElement: true, 
    ranking: #HIGH, 
    fuzzinessThreshold: 0.8 
  }
  key ServiceDocumentType,
 
  @Semantics.text: true
  @Search: { 
    defaultSearchElement: true, 
    ranking: #LOW, 
    fuzzinessThreshold: 0.8 
  }
  ServiceDocumentTypeName
}
group by
  ServiceDocumentType,
  ServiceDocumentTypeName
```
