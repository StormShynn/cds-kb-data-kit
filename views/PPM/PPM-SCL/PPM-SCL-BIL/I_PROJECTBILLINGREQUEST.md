---
name: I_PROJECTBILLINGREQUEST
description: Projectbillingrequest
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
  - billing
  - project
  - component:PPM-SCL-BIL
  - lob:Other
  - bo:Project
---
# I_PROJECTBILLINGREQUEST

**Projectbillingrequest**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProjectBillingRequestUUID` | ✓ | |  | `projectbillingrequestuuid` |
| `ProjectBillingRequest` |  | |  | `projectbillingrequest` |
| `ProjectBillingRequestStatus` |  | |  | `projectbillingrequeststatus` |
| `ProjBillgReqApprovalStatus` |  | |  | `projbillgreqapprovalstatus` |
| `ProjectBillingRequestType` |  | |  | `projectbillingrequesttype` |
| `SalesDocument` |  | |  | `salesdocument` |
| `ProjectBillingCategory` |  | |  | `projectbillingcategory` |
| `ProjBillgReqLastChgdBy` |  | |  | `projbillgreqlastchgdby` |
| `ProjBillgReqLastChgdAtDteTme` |  | |  | `projbillgreqlastchgdatdtetme` |
| `ProjBillgReqCreatedBy` |  | |  | `projbillgreqcreatedby` |
| `ProjBillgReqCreatedAtDteTme` |  | |  | `projbillgreqcreatedatdtetme` |
| `ProjectInternalID` |  | |  | `projectinternalid` |
| `_ProjectBillingRequestItem` | | ✓ | | |
| `_ProjectBillingRequestStatus` | | ✓ | | |
| `_ProjectBillingReqStatusText` | | ✓ | | |
| `_ProjBillgReqApprovalStatus` | | ✓ | | |
| `_ProjBillgReqApprvlStatusText` | | ✓ | | |
| `_ProjectBillingCategory` | | ✓ | | |
| `_ProjectBillingCategoryText` | | ✓ | | |
| `_ProjectBillingRequestType` | | ✓ | | |
| `_ProjectBillingRequestTypeTxt` | | ✓ | | |
| `_SalesDocument` | | ✓ | | |
| `_EnterpriseProject` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectBillingRequestItem` | `I_ProjectBillingRequestItem` | [0..*] |
| `_ProjectBillingRequestStatus` | `I_ProjectBillingRequestStatus` | [0..1] |
| `_ProjectBillingReqStatusText` | `I_ProjectBillingReqStatusText` | [1..*] |
| `_ProjBillgReqApprovalStatus` | `I_ProjBillgReqApprovalStatus` | [0..1] |
| `_ProjBillgReqApprvlStatusText` | `I_ProjBillgReqApprvlStatusText` | [1..*] |
| `_ProjectBillingCategory` | `I_ProjectBillingCategory` | [0..1] |
| `_ProjectBillingCategoryText` | `I_ProjectBillingCategoryText` | [1..*] |
| `_ProjectBillingRequestType` | `I_ProjectBillingRequestType` | [0..1] |
| `_ProjectBillingRequestTypeTxt` | `I_ProjectBillingRequestTypeTxt` | [1..*] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_EnterpriseProject` | `I_EnterpriseProject` | [1..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Project Billing Request'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@ObjectModel: {
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ],
    usageType: {
        sizeCategory: #L,
        dataClass:  #TRANSACTIONAL,
        serviceQuality: #A
    },
    representativeKey: 'ProjectBillingRequestUUID'
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProjectBillingRequest'

define view entity I_ProjectBillingRequest
  as select from projbillgreq
  association [0..*] to I_ProjectBillingRequestItem    as _ProjectBillingRequestItem    on $projection.ProjectBillingRequestUUID = _ProjectBillingRequestItem.ProjectBillingRequestUUID
  association [0..1] to I_ProjectBillingRequestStatus  as _ProjectBillingRequestStatus  on $projection.ProjectBillingRequestStatus = _ProjectBillingRequestStatus.ProjectBillingRequestStatus
  association [1..*] to I_ProjectBillingReqStatusText  as _ProjectBillingReqStatusText  on $projection.ProjectBillingRequestStatus = _ProjectBillingReqStatusText.ProjectBillingRequestStatus
  association [0..1] to I_ProjBillgReqApprovalStatus   as _ProjBillgReqApprovalStatus   on $projection.ProjBillgReqApprovalStatus = _ProjBillgReqApprovalStatus.ProjBillgReqApprovalStatus
  association [1..*] to I_ProjBillgReqApprvlStatusText as _ProjBillgReqApprvlStatusText on $projection.ProjBillgReqApprovalStatus = _ProjBillgReqApprvlStatusText.ProjBillgReqApprovalStatus
  association [0..1] to I_ProjectBillingCategory       as _ProjectBillingCategory       on $projection.ProjectBillingCategory = _ProjectBillingCategory.ProjectBillingCategory
  association [1..*] to I_ProjectBillingCategoryText   as _ProjectBillingCategoryText   on $projection.ProjectBillingCategory = _ProjectBillingCategoryText.ProjectBillingCategory
  association [0..1] to I_ProjectBillingRequestType    as _ProjectBillingRequestType    on $projection.ProjectBillingRequestType = _ProjectBillingRequestType.ProjectBillingRequestType
  association [1..*] to I_ProjectBillingRequestTypeTxt as _ProjectBillingRequestTypeTxt on $projection.ProjectBillingRequestType = _ProjectBillingRequestTypeTxt.ProjectBillingRequestType
  association [0..1] to I_SalesDocument                as _SalesDocument                on $projection.SalesDocument = _SalesDocument.SalesDocument
  association [1..1] to I_EnterpriseProject            as _EnterpriseProject            on $projection.ProjectInternalID = _EnterpriseProject.ProjectInternalID
//association [1..1] to I_ProjectBasicData             as _ProjectBasicData             on $projection.ProjectInternalID = _ProjectBasicData.ProjectInternalID
{ 
  key projectbillingrequestuuid                                   as ProjectBillingRequestUUID,
      projectbillingrequest                                       as ProjectBillingRequest,
      @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_ProjectBillingRequestStatus',
             element: 'ProjectBillingRequestStatus' }
      }]
      @ObjectModel.foreignKey.association: '_ProjectBillingRequestStatus'
      projectbillingrequeststatus                                 as ProjectBillingRequestStatus,
      @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_ProjBillgReqApprovalStatus',
             element: 'ProjBillgReqApprovalStatus' }
      }]
      @ObjectModel.foreignKey.association: '_ProjBillgReqApprovalStatus'
      projbillgreqapprovalstatus                                  as ProjBillgReqApprovalStatus,
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_ProjectBillingRequestType',
                   element: 'ProjectBillingRequestType' }
      }]
      @ObjectModel.foreignKey.association: '_ProjectBillingRequestType'
      projectbillingrequesttype                                   as ProjectBillingRequestType,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDocumentStdVH',
                     element: 'SalesDocument' }
        }]
      @ObjectModel.foreignKey.association: '_SalesDocument'
      salesdocument                                               as SalesDocument,
      @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_ProjectBillingCategory',
                   element: 'ProjectBillingCategory' }
      }]
      @ObjectModel.foreignKey.association: '_ProjectBillingCategory'
      projectbillingcategory                                      as ProjectBillingCategory,
      @Semantics.user.lastChangedBy: true
      projbillgreqlastchgdby                                      as ProjBillgReqLastChgdBy,
      @Semantics.systemDateTime.lastChangedAt: true
      projbillgreqlastchgdatdtetme                                as ProjBillgReqLastChgdAtDteTme,
      @Semantics.user.createdBy: true
      projbillgreqcreatedby                                       as ProjBillgReqCreatedBy,
      @Semantics.systemDateTime.createdAt: true
      projbillgreqcreatedatdtetme                                 as ProjBillgReqCreatedAtDteTme,
      projectinternalid                                           as ProjectInternalID,
//    projectbasicdata                                            as ProjectBasicData,
      _EnterpriseProject,
      
      _ProjectBillingRequestItem,
      _ProjectBillingRequestType,
      _ProjectBillingRequestStatus,
      _ProjBillgReqApprovalStatus,
      _SalesDocument,
      _ProjectBillingCategory,
      @Consumption.hidden: true
      _ProjectBillingReqStatusText,
      @Consumption.hidden: true
      _ProjBillgReqApprvlStatusText,
      @Consumption.hidden: true
      _ProjectBillingCategoryText,
      @Consumption.hidden: true
      _ProjectBillingRequestTypeTxt
//      _ProjectInternalID,
//     @Consumption.hidden: true
//      _ProjectInternalID._ProjectShortText.LanguageBasedShortText as ProjectInternalIDText,
//      _ProjectBasicData
      
}
```
