---
name: I_PROJECTBILLINGELEMENT
description: "Projectbillingelement"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_PROJECTBILLINGELEMENT

**Projectbillingelement**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectBillingElementUUID` | ✓ | |  | `projectbillingelementuuid` |  |  |
| `BillingWBSElementInternalID` |  | |  | `billingwbselementinternalid` |  |  |
| `DocumentCurrency` |  | |  | `documentcurrency` |  |  |
| `BilledRevenueAmtInDocCrcy` |  | |  | `billedrevenueamtindoccrcy` |  |  |
| `WrittenOffRevenueAmtInDocCrcy` |  | |  | `writtenoffrevenueamtindoccrcy` |  |  |
| `ProjBillingProfile` |  | |  | `projbillingprofile` |  |  |
| `ProjectBillingCategory` |  | |  | `projectbillingcategory` |  |  |
| `ProjBillgElmntCreatedByUser` |  | |  | `projbillgelmntcreatedbyuser` |  |  |
| `ProjBillgElmntCreatedAtDteTme` |  | |  | `projbillgelmntcreatedatdtetme` |  |  |
| `ProjBillgElmntLastChgdByUser` |  | |  | `projbillgelmntlastchgdbyuser` |  |  |
| `ProjBillgElmntLastChgdAtDteTme` |  | |  | `projbillgelmntlastchgdatdtetme` |  |  |
| `SalesDocument` |  | |  | `salesdocument` |  |  |
| `SalesDocumentItem` |  | |  | `salesdocumentitem` |  |  |
| `BillingPlan` |  | |  | `billingplan` |  |  |
| `ProjectUUID` |  | |  | `projectuuid` |  |  |
| `ProjectElementUUID` |  | |  | `projectelementuuid` |  |  |
| `PrjBlgElmObjLnkUUID` |  | | `_ProjBillgElmObjectLink` | `PrjBlgElmObjLnkUUID` |  |  |
| `_ProjectBillingElementEntry` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_ProjBillgElmObjectLink` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |
| `_ProjectBillingCategory` | | ✓ | | | | |
| `_ProjectBillingCategoryText` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_EnterpriseProjectElement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectBillingElementEntry` | `I_ProjectBillingElementEntry` | [0..*] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_ProjBillgElmObjectLink` | `I_ProjBillgElmObjectLink` | [0..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_CurrencyText` | `I_CurrencyText` | [1..*] |
| `_ProjectBillingCategory` | `I_ProjectBillingCategory` | [0..1] |
| `_ProjectBillingCategoryText` | `I_ProjectBillingCategoryText` | [1..*] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_EnterpriseProjectElement` | `I_EnterpriseProjectElement` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Project Billing Element'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
//@Analytics.dataExtraction.enabled: true
//@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'projbillgelmnt', role: #MAIN,
                    viewElement: ['ProjectBillingElementUUID'],
                    tableElement: ['projectbillingelementuuid']
                },
                {
                    table: 'prjblgelmobjlnk', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['PrjBlgElmObjLnkUUID'],
                    tableElement: ['prjblgelmobjlnkuuid']
                }
            ]
        }
    }
 }

@ObjectModel: {
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ],
    usageType: {
        sizeCategory: #M,
        dataClass:  #TRANSACTIONAL,
        serviceQuality: #A
    },
    representativeKey: 'ProjectBillingElementUUID'
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProjectBillingElement'


define view entity I_ProjectBillingElement
  as select from projbillgelmnt as ProjectBillingElement
  association [0..*] to I_ProjectBillingElementEntry as _ProjectBillingElementEntry on $projection.ProjectBillingElementUUID = _ProjectBillingElementEntry.ProjectBillingElementUUID

  association [0..1] to I_WBSElementBasicData        as _WBSElement                 on $projection.BillingWBSElementInternalID = _WBSElement.WBSElementInternalID

  association [0..1] to I_ProjBillgElmObjectLink     as _ProjBillgElmObjectLink     on $projection.ProjectBillingElementUUID = _ProjBillgElmObjectLink.ProjectBillingElementUUID

  association [1..1] to I_Currency                   as _Currency                   on $projection.DocumentCurrency = _Currency.Currency

  association [1..*] to I_CurrencyText               as _CurrencyText               on $projection.DocumentCurrency = _CurrencyText.Currency

  association [0..1] to I_ProjectBillingCategory     as _ProjectBillingCategory     on $projection.ProjectBillingCategory = _ProjectBillingCategory.ProjectBillingCategory

  association [1..*] to I_ProjectBillingCategoryText as _ProjectBillingCategoryText on $projection.ProjectBillingCategory = _ProjectBillingCategoryText.ProjectBillingCategory

  association [0..1] to I_SalesDocument              as _SalesDocument              on $projection.SalesDocument = _SalesDocument.SalesDocument

  association [0..1] to I_EnterpriseProjectElement   as _EnterpriseProjectElement   on $projection.ProjectElementUUID = _EnterpriseProjectElement.ProjectElementUUID
{
  key ProjectBillingElement.projectbillingelementuuid      as ProjectBillingElementUUID,
      ProjectBillingElement.billingwbselementinternalid    as BillingWBSElementInternalID,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_Currency'
      ProjectBillingElement.documentcurrency               as DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      ProjectBillingElement.billedrevenueamtindoccrcy      as BilledRevenueAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      ProjectBillingElement.writtenoffrevenueamtindoccrcy  as WrittenOffRevenueAmtInDocCrcy,
      ProjectBillingElement.projbillingprofile             as ProjBillingProfile,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProjectBillingCategory',
                     element: 'ProjectBillingCategory' }
        }]
      @ObjectModel.foreignKey.association: '_ProjectBillingCategory'
      ProjectBillingElement.projectbillingcategory         as ProjectBillingCategory,
      @Semantics.user.createdBy: true
      ProjectBillingElement.projbillgelmntcreatedbyuser    as ProjBillgElmntCreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      ProjectBillingElement.projbillgelmntcreatedatdtetme  as ProjBillgElmntCreatedAtDteTme,
      @Semantics.user.lastChangedBy: true
      ProjectBillingElement.projbillgelmntlastchgdbyuser   as ProjBillgElmntLastChgdByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      ProjectBillingElement.projbillgelmntlastchgdatdtetme as ProjBillgElmntLastChgdAtDteTme,

      ProjectBillingElement.salesdocument                  as SalesDocument,
      ProjectBillingElement.salesdocumentitem              as SalesDocumentItem,
      ProjectBillingElement.billingplan                    as BillingPlan,

      ProjectBillingElement.projectuuid                    as ProjectUUID,
      ProjectBillingElement.projectelementuuid             as ProjectElementUUID,

      _ProjBillgElmObjectLink.PrjBlgElmObjLnkUUID, //for the delta extraction
      // _ProjBillgElmObjectLink.SalesDocument,
      //Added for reversing incompatible change
      _SalesDocument,
      //End of Added for reversing incompatible change
      //Associations
      _ProjectBillingElementEntry,
      _WBSElement,
      // _ProjBillgElmObjectLink._SalesDocument,
      _ProjBillgElmObjectLink,
      _Currency,
      @Consumption.hidden: true
      _CurrencyText,
      _ProjectBillingCategory,
      @Consumption.hidden: true
      _ProjectBillingCategoryText,
      _EnterpriseProjectElement
}
```
