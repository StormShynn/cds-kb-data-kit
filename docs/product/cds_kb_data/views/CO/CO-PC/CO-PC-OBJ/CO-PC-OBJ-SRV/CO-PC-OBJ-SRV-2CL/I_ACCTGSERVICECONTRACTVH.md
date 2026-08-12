---
name: I_ACCTGSERVICECONTRACTVH
description: "Acctgservicecontractvh"
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
  - contract
  - component:CO-PC-OBJ-SRV-2CL
  - lob:Controlling
---
# I_ACCTGSERVICECONTRACTVH

**Acctgservicecontractvh**

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
| `ServiceContract` | ✓ | |  | `ServiceDocument` |  |  |
| `ObjectType` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIACSRVCONTRH'
@ObjectModel.representativeKey: 'ServiceContract'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #C,
  sizeCategory: #L
}
@ObjectModel.semanticKey: ['ServiceContract']
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Search.searchable: true
@Consumption.ranked: true
@EndUserText.label: 'Service Contract'

@Metadata.ignorePropagatedAnnotations: true

define view I_AcctgServiceContractVH
  as select from P_AcctgServiceDocument 

{
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
  key ServiceDocumentType,
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key ServiceDocument                                              as          ServiceContract,
//  key cast(substring(ControllingObject, 3, 10) as j_objnr)         as          ServiceContract,
      ObjectType
}
where ObjectType = 'SC'
group by ServiceDocumentType, ServiceDocument, ObjectType
//group by ServiceDocumentType, ControllingObject, ObjectType
```
