---
name: I_ACCTGSERVICEDOCUMENTTYPEVH
description: "ACCTGService DocumentUMENTTYPEVH"
app_component: CO-PC-OBJ-SRV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - value-help
  - service
  - document
  - component:CO-PC-OBJ-SRV-2CL
  - lob:Controlling
---
# I_ACCTGSERVICEDOCUMENTTYPEVH

**ACCTGService DocumentUMENTTYPEVH**

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
@AbapCatalog.sqlViewName: 'IFIACSRVDOCTYPVH'
@ObjectModel.representativeKey: 'ServiceDocumentType'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #C,
  sizeCategory: #L
}
@ObjectModel.semanticKey: ['ServiceDocumentType']
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@Consumption.ranked: true

@EndUserText.label: 'Service Document Type'

@Metadata.ignorePropagatedAnnotations: true

define view I_AcctgServiceDocumentTypeVH 
  as select from P_AcctgServiceDocumentItem 
  
{
      @ObjectModel.text.element: ['ServiceDocumentTypeName']
      @UI.textArrangement: #TEXT_LAST
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key ServiceDocumentType,
      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      ServiceDocumentTypeName
}
group by ServiceDocumentType, ServiceDocumentTypeName
```
