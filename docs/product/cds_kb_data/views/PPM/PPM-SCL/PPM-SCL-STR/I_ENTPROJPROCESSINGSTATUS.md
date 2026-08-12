---
name: I_ENTPROJPROCESSINGSTATUS
description: "Entprojprocessingstatus"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - status
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJPROCESSINGSTATUS

**Entprojprocessingstatus**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessingStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as /s4ppm/tv_proc_status )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_ProcessingStatusText` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IENTPROJPROCS'
@EndUserText.label: 'Processing Status for Enterprise Projects'
// @OData.entityType.name: 'EnterpriseProjectProcessingStatus_Type'
@ObjectModel.representativeKey: 'ProcessingStatus'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
//@ObjectModel.alternativeKey: [ { id : 'Domain', 
//                                 uniqueness: #UNIQUE, 
//                                 element: ['DomainValue'] } ]
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'EntProjectProcessingStatus'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define root view I_EntProjProcessingStatus 
  as select from dd07l
  composition [0..*] of I_EntProjProcessingStatusText as _ProcessingStatusText
{
      @ObjectModel.text.association: '_ProcessingStatusText'
  key cast ( substring( domvalue_l, 1, 2 ) as /s4ppm/tv_proc_status ) as ProcessingStatus,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      _ProcessingStatusText
}
where
      domname  = 'DPR_PROC_STATUS'
      and as4local = 'A'
```
