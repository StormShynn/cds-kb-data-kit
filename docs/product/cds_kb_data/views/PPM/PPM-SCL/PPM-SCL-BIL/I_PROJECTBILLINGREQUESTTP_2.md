---
name: I_PROJECTBILLINGREQUESTTP_2
description: "Projectbillingrequesttp 2"
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
  - transactional-processing
  - billing
  - project
  - component:PPM-SCL-BIL
  - lob:Other
  - bo:Project
---
# I_PROJECTBILLINGREQUESTTP_2

**Projectbillingrequesttp 2**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectBillingRequestUUID` | ✓ | |  |  |  |  |
| `ProjectBillingRequest` |  | |  |  |  |  |
| `ProjectBillingRequestStatus` |  | |  |  |  |  |
| `ProjBillgReqApprovalStatus` |  | |  |  |  |  |
| `SalesDocument` |  | |  |  |  |  |
| `ProjBillgReqLastChgdBy` |  | |  |  |  |  |
| `ProjBillgReqLastChgdAtDteTme` |  | |  |  |  |  |
| `ProjBillgReqCreatedBy` |  | |  |  |  |  |
| `ProjBillgReqCreatedAtDteTme` |  | |  |  |  |  |
| `ProjectBillingCategory` |  | |  |  |  |  |
| `ProjectInternalID` |  | |  |  |  |  |
| `_EnterpriseProject` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_ProjectBillingCategory` | | ✓ | | | | |
| `_ProjectBillingCategoryText` | | ✓ | | | | |
| `_ProjectBillingRequestStatus` | | ✓ | | | | |
| `_ProjectBillingReqStatusText` | | ✓ | | | | |
| `_ProjBillgReqApprovalStatus` | | ✓ | | | | |
| `_ProjBillgReqApprvlStatusText` | | ✓ | | | | |
| `_ProjectBillingReqItemTP` | | ✓ | | | | |

## Source Code

```abap
@VDM: { viewType: #TRANSACTIONAL,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }

@AccessControl.authorizationCheck: #MANDATORY

@ObjectModel: { sapObjectNodeType     : {name: 'ProjectBillingRequest'},
                modelingPattern       : #TRANSACTIONAL_INTERFACE,
                supportedCapabilities : [#TRANSACTIONAL_PROVIDER],
                usageType             : { serviceQuality : #C,
                                          dataClass      : #TRANSACTIONAL,
                                          sizeCategory   : #XL } }

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Project Billing Request Projection'


define root view entity I_ProjectBillingRequestTP_2
  provider contract transactional_interface
  as projection on R_ProjectBillingRequestTP as ProjectBillingRequest
{
  key ProjectBillingRequestUUID,
      ProjectBillingRequest,
      @ObjectModel.sapObjectNodeTypeReference: 'ProjectBillingRequestStatus'
      ProjectBillingRequestStatus,
      @ObjectModel.sapObjectNodeTypeReference: 'ProjBillgReqApprovalStatus'
      ProjBillgReqApprovalStatus,
      SalesDocument,
      ProjBillgReqLastChgdBy,
      ProjBillgReqLastChgdAtDteTme,
      ProjBillgReqCreatedBy, 
      ProjBillgReqCreatedAtDteTme,
      @ObjectModel.sapObjectNodeTypeReference: 'ProjectBillingCategory'
      ProjectBillingCategory,

      ProjectBillingRequest.ProjectInternalID,
      _EnterpriseProject,
      _SalesDocument,
      _ProjectBillingCategory,
      @Consumption.hidden: true
      _ProjectBillingCategoryText,
      _ProjectBillingRequestStatus,
      @Consumption.hidden: true
      _ProjectBillingReqStatusText,
      _ProjBillgReqApprovalStatus,
      @Consumption.hidden: true
      _ProjBillgReqApprvlStatusText,
      
      
      
      /* Compositions */
      _ProjectBillingReqItemTP : redirected to composition child I_ProjectBillingReqItemTP_2

}
where ProjectBillingCategory <> 'ICBL'
```
