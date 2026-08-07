---
name: I_PROJBILLGREQAPPROVALSTATUS
description: Projbillgreqapprovalstatus
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - status
  - approval
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_PROJBILLGREQAPPROVALSTATUS

**Projbillgreqapprovalstatus**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjBillgReqApprovalStatus` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pbr_apprvl_status preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_ProjBillgReqApprvlStatusText` | | ✓ | | | | |

## Source Code

```abap
@Analytics.technicalName: 'IPBRAPPRVLSTATUS'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Project Billing Request Approval Status'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProjBillgReqApprovalStatus'
@ObjectModel.representativeKey: 'ProjBillgReqApprovalStatus'
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META  
}
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.dataCategory: #VALUE_HELP                                    

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API


define root view entity I_ProjBillgReqApprovalStatus as select from dd07l
  composition [0..*] of I_ProjBillgReqApprvlStatusText as _ProjBillgReqApprvlStatusText
{
       @ObjectModel.text.association: '_ProjBillgReqApprvlStatusText'
   key cast( substring( domvalue_l, 1, 1 ) as pbr_apprvl_status preserving type ) as ProjBillgReqApprovalStatus,

       @Analytics.hidden: true
       @Consumption.hidden: true
       @Search.defaultSearchElement: true
       @Search.ranking: #HIGH
       dd07l.domvalue_l as DomainValue,
          
       _ProjBillgReqApprvlStatusText
}
where domname  = 'PBR_WRKFLW_APPRVL_STATUS' and as4local = 'A'
```
