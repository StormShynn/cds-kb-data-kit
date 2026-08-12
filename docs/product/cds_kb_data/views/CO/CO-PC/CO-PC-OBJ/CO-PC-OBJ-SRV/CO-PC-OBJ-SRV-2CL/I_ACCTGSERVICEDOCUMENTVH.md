---
name: I_ACCTGSERVICEDOCUMENTVH
description: "ACCTGService DocumentUMENTVH"
app_component: CO-PC-OBJ-SRV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_ACCTGSERVICEDOCUMENTVH

**ACCTGService DocumentUMENTVH**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-SRV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocument` | ✓ | |  |  |  |  |
| `ServiceDocumentType` | ✓ | |  |  |  |  |
| `ServiceDocumentDescription` |  | |  |  |  |  |
| `ServiceDocumentTypeName` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIACSRVDOCVH'
@ObjectModel.representativeKey: 'ServiceDocument'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #C,
  sizeCategory: #L
}
@ObjectModel.semanticKey: ['ServiceDocument', 'ServiceDocumentType']
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@Consumption.ranked: true

@EndUserText.label: 'Service Document ID'

@Metadata.ignorePropagatedAnnotations: true

define view I_AcctgServiceDocumentVH
  as select from P_AcctgServiceDocumentItem 

{
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key ServiceDocument,
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key ServiceDocumentType,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      ServiceDocumentDescription,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      ServiceDocumentTypeName,
      CompanyCode,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      ProfitCenter
}
group by ServiceDocumentType, ServiceDocument, ServiceDocumentDescription, ServiceDocumentTypeName, CompanyCode, ProfitCenter
```
