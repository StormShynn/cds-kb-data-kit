---
name: I_PROJBILLGELMOBJECTLINK
description: Projbillgelmobjectlink
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
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_PROJBILLGELMOBJECTLINK

**Projbillgelmobjectlink**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PrjBlgElmObjLnkUUID` | ✓ | |  | `prjblgelmobjlnkuuid` |  |  |
| `ProjectBillingElementUUID` |  | |  | `projectbillingelementuuid` |  |  |
| `SalesDocument` |  | |  | `salesdocument` |  |  |
| `SalesDocumentItem` |  | |  | `salesdocumentitem` |  |  |
| `SDDocumentCategory` |  | |  | `sddocumentcategory` |  |  |
| `PartnerCompanyCode` |  | |  | `partnercompanycode` |  |  |
| `ReceiverCompanyCode` |  | |  | `receivercompanycode` |  |  |
| `_ProjectBillingElement` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectBillingElement` | `I_ProjectBillingElement` | [1..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IPBEOBJLNK'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Project Billing Element Object Link'
//@ObjectModel.usageType: {
//    serviceQuality: #A,
//    sizeCategory: #L,
//    dataClass: #TRANSACTIONAL
//}
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true

@ObjectModel: {
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ],
    usageType:{
       sizeCategory: #M,
       dataClass:  #TRANSACTIONAL,
       serviceQuality: #A
    },
    representativeKey: 'PrjBlgElmObjLnkUUID'
}
@ObjectModel.sapObjectNodeType.name: 'ProjectBillingElmntObjectLink' 
//@ClientHandling.algorithm: #SESSION_VARIABLE

define view entity I_ProjBillgElmObjectLink
  as select from prjblgelmobjlnk as ProjBillgElmObjectLink
  association [1..1] to I_ProjectBillingElement as _ProjectBillingElement on $projection.ProjectBillingElementUUID = _ProjectBillingElement.ProjectBillingElementUUID
  association [0..1] to I_SalesDocument         as _SalesDocument         on $projection.SalesDocument = _SalesDocument.SalesDocument
{
  key ProjBillgElmObjectLink.prjblgelmobjlnkuuid       as PrjBlgElmObjLnkUUID,
      ProjBillgElmObjectLink.projectbillingelementuuid as ProjectBillingElementUUID,
      ProjBillgElmObjectLink.salesdocument             as SalesDocument,
      ProjBillgElmObjectLink.salesdocumentitem         as SalesDocumentItem,
      ProjBillgElmObjectLink.sddocumentcategory        as SDDocumentCategory,
      ProjBillgElmObjectLink.partnercompanycode        as PartnerCompanyCode,
      ProjBillgElmObjectLink.receivercompanycode       as ReceiverCompanyCode,
      _ProjectBillingElement,
      _SalesDocument
}
```
