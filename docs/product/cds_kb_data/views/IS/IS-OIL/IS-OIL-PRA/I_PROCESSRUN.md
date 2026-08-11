---
name: I_PROCESSRUN
description: "Process Run"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSRUN')/$value
semantic_en: "Process Run"
semantic_vi: "Process Run — CDS view giao diện dựa trên Process Run."
keywords:
  - "process"
  - "run"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PROCESSRUN

**Process Run**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSRUN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessRun` | ✓ | |  | `/pra/run_hdr.run_id` | `NUMC(10)` | Proc 2.0 - Run ID |
| `ProcessRunName` |  | |  | `cast( run_description as oiu_vdm_process_run_name)` | `CHAR(25)` | Run Description Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSRUN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSRUN')/$value)*

```abap
@EndUserText.label: 'Process Run'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVRUNID'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ProcessRun'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name: 'PRAProcessRun'

define view I_ProcessRun
  as select from /pra/run_hdr
//  left outer join OIUE2_RUN_HDR on /pra/run_hdr.run_id = OIUE2_RUN_HDR.run_id
{
      @ObjectModel.text.element:  [ 'ProcessRunName' ]
  key /pra/run_hdr.run_id                                             as ProcessRun,
      @Semantics.text: true
      cast( run_description as oiu_vdm_process_run_name)              as ProcessRunName
//      OIUE2_RUN_HDR.TF_IND as TrilFinalIndicator
}
```
