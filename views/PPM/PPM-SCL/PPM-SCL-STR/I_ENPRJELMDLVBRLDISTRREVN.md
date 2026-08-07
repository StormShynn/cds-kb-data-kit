---
name: I_ENPRJELMDLVBRLDISTRREVN
description: Enprjelmdlvbrldistrrevn
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
# I_ENPRJELMDLVBRLDISTRREVN

**Enprjelmdlvbrldistrrevn**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `EntProjElmntDlvbrlDistrUUID` | ✓ | |  | `entprojelmntdlvbrldistruuid` |
| `EntProjElmntDeliverableUUID` |  | |  | `entprojelmntdeliverableuuid` |
| `ProjectElementUUID` |  | |  | `projectelementuuid` |
| `ProjectUUID` |  | |  | `projectuuid` |
| `EntProjElmntDlvbrlDistrYearVal` |  | |  | `entprojelmntdlvbrldistryearval` |
| `EntProjElmntDlvbrlDistrPerdVal` |  | |  | `entprojelmntdlvbrldistrperdval` |
| `EntProjElmntDlvbrlDistrQty` |  | |  | `entprojelmntdlvbrldistrqty` |
| `EntProjElmntDlvbrlDistrQtyUnit` |  | |  | `entprojelmntdlvbrldistrqtyunit` |
| `EntProjElmntDlvbrlDistrRevenue` |  | |  | `entprojelmntdlvdistrrevenue` |
| `EntPrjElmntDlvbrlDistrRevnCrcy` |  | |  | `entprojelmntdlvdistrrevncurr` |
| `_EnterpriseProject` | | ✓ | | |
| `_EnterpriseProjectElement` | | ✓ | | |
| `_EntProjElmntDlvbrlRevenue` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EnterpriseProject` | `I_EnterpriseProject` | [1..1] |
| `_EnterpriseProjectElement` | `I_EnterpriseProjectElement` | [1..1] |
| `_EntProjElmntDlvbrlRevenue` | `I_EntProjElmntDlvbrlRevenue` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@EndUserText.label: 'Dlvrbl Distr of Ent Proj Elmnt with Revenue'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:{
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  sapObjectNodeType.name: 'EntProjElmntDlvbrlDistr'
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
define view entity I_EnPrjElmDlvbrlDistrRevn
  as select from /s4ppm/dlvdistr as DeliverableDistribution
  association [1..1] to I_EnterpriseProject         as _EnterpriseProject         on $projection.ProjectUUID = _EnterpriseProject.ProjectUUID
  association [1..1] to I_EnterpriseProjectElement  as _EnterpriseProjectElement  on $projection.ProjectElementUUID = _EnterpriseProjectElement.ProjectElementUUID
  association [1..1] to I_EntProjElmntDlvbrlRevenue as _EntProjElmntDlvbrlRevenue on $projection.EntProjElmntDeliverableUUID = _EntProjElmntDlvbrlRevenue.EntProjElmntDeliverableUUID
{
  key DeliverableDistribution.entprojelmntdlvbrldistruuid    as EntProjElmntDlvbrlDistrUUID,
      DeliverableDistribution.entprojelmntdeliverableuuid    as EntProjElmntDeliverableUUID,
      DeliverableDistribution.projectelementuuid             as ProjectElementUUID,
      DeliverableDistribution.projectuuid                    as ProjectUUID,
      DeliverableDistribution.entprojelmntdlvbrldistryearval as EntProjElmntDlvbrlDistrYearVal,
      DeliverableDistribution.entprojelmntdlvbrldistrperdval as EntProjElmntDlvbrlDistrPerdVal,
      @Semantics.quantity.unitOfMeasure: 'EntProjElmntDlvbrlDistrQtyUnit'
      DeliverableDistribution.entprojelmntdlvbrldistrqty     as EntProjElmntDlvbrlDistrQty,
      DeliverableDistribution.entprojelmntdlvbrldistrqtyunit as EntProjElmntDlvbrlDistrQtyUnit,

      @Semantics.amount.currencyCode: 'EntPrjElmntDlvbrlDistrRevnCrcy'
      DeliverableDistribution.entprojelmntdlvdistrrevenue    as EntProjElmntDlvbrlDistrRevenue,
      DeliverableDistribution.entprojelmntdlvdistrrevncurr   as EntPrjElmntDlvbrlDistrRevnCrcy,

      _EnterpriseProject,
      _EnterpriseProjectElement,
      _EntProjElmntDlvbrlRevenue
}
```
