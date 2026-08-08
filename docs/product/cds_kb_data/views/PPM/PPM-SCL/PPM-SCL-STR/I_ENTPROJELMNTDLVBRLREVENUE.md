---
name: I_ENTPROJELMNTDLVBRLREVENUE
description: "Entprojelmntdlvbrlrevenue"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJELMNTDLVBRLREVENUE

**Entprojelmntdlvbrlrevenue**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EntProjElmntDeliverableUUID` | ✓ | |  | `entprojelmntdeliverableuuid` |  |  |
| `ProjectElementUUID` |  | |  | `projectelementuuid` |  |  |
| `ProjectUUID` |  | |  | `projectuuid` |  |  |
| `EntProjElmntDeliverableType` |  | |  | `entprojelmntdeliverabletype` |  |  |
| `EntProjElmntDlvbrlQuantity` |  | |  | `entprojelmntdlvbrlquantity` |  |  |
| `EntProjElmntDlvbrlQuantityUnit` |  | |  | `entprojelmntdlvbrlquantityunit` |  |  |
| `EntProjElmntDlvbrlRevnAmount` |  | |  | `entprojelmntdlvbrlrevnamount` |  |  |
| `EntProjElmntDlvbrlRevnCurrency` |  | |  | `entprojelmntdlvbrlrevncurrency` |  |  |
| `CreatedByUser` |  | |  | `created_by` |  |  |
| `CreationDateTime` |  | |  | `created_on` |  |  |
| `LastChangedByUser` |  | |  | `changed_by` |  |  |
| `LastChangeDateTime` |  | |  | `changed_on` |  |  |
| `_EnterpriseProject` | | ✓ | | | | |
| `_EnterpriseProjectElement` | | ✓ | | | | |
| `_EnPrjElmDlvbrlDistrRevn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EnterpriseProject` | `I_EnterpriseProject` | [1..1] |
| `_EnterpriseProjectElement` | `I_EnterpriseProjectElement` | [1..1] |
| `_EnPrjElmDlvbrlDistrRevn` | `I_EnPrjElmDlvbrlDistrRevn` | [1..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@EndUserText.label: 'Deliverable of Ent Proj Elmnt with Revenue'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:{
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  sapObjectNodeType.name: 'EntProjElmntDlvbrl'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture.automatic: true
  }
}
define view entity I_EntProjElmntDlvbrlRevenue
  as select from /s4ppm/dlvbrl as Deliverable
  association [1..1] to I_EnterpriseProject        as _EnterpriseProject        on $projection.ProjectUUID = _EnterpriseProject.ProjectUUID
  association [1..1] to I_EnterpriseProjectElement as _EnterpriseProjectElement on $projection.ProjectElementUUID = _EnterpriseProjectElement.ProjectElementUUID
  association [1..*] to I_EnPrjElmDlvbrlDistrRevn  as _EnPrjElmDlvbrlDistrRevn  on $projection.EntProjElmntDeliverableUUID = _EnPrjElmDlvbrlDistrRevn.EntProjElmntDeliverableUUID
{
  key Deliverable.entprojelmntdeliverableuuid    as EntProjElmntDeliverableUUID,
      Deliverable.projectelementuuid             as ProjectElementUUID,
      Deliverable.projectuuid                    as ProjectUUID,
      Deliverable.entprojelmntdeliverabletype    as EntProjElmntDeliverableType,
      @Semantics.quantity.unitOfMeasure : 'EntProjElmntDlvbrlQuantityUnit'
      Deliverable.entprojelmntdlvbrlquantity     as EntProjElmntDlvbrlQuantity,
      Deliverable.entprojelmntdlvbrlquantityunit as EntProjElmntDlvbrlQuantityUnit,

      @Semantics.amount.currencyCode: 'EntProjElmntDlvbrlRevnCurrency'
      Deliverable.entprojelmntdlvbrlrevnamount   as EntProjElmntDlvbrlRevnAmount,
      Deliverable.entprojelmntdlvbrlrevncurrency as EntProjElmntDlvbrlRevnCurrency,

      Deliverable.created_by                     as CreatedByUser,
      Deliverable.created_on                     as CreationDateTime,
      Deliverable.changed_by                     as LastChangedByUser,
      Deliverable.changed_on                     as LastChangeDateTime,

      _EnterpriseProject,
      _EnterpriseProjectElement,
      _EnPrjElmDlvbrlDistrRevn
}
```
