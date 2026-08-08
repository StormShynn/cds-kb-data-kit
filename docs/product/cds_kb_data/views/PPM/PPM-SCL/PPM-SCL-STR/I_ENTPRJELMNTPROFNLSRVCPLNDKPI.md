---
name: I_ENTPRJELMNTPROFNLSRVCPLNDKPI
description: "Entprjelmntprofnlsrvcplndkpi"
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
# I_ENTPRJELMNTPROFNLSRVCPLNDKPI

**Entprjelmntprofnlsrvcplndkpi**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectUUID` | ✓ | |  |  |  |  |
| `ProjectElementUUID` | ✓ | |  |  |  |  |
| `Project` |  | |  |  |  |  |
| `ProjectElement` |  | |  |  |  |  |
| `ProjectElementDescription` |  | |  |  |  |  |
| `PlannedStartDate` |  | |  |  |  |  |
| `PlannedEndDate` |  | |  |  |  |  |
| `EntProjectElementType` |  | |  |  |  |  |
| `EntProjElmntDeliverableType` |  | |  |  |  |  |
| `EntProjElmntDlvbrlQuantity` |  | |  |  |  |  |
| `EntProjElmntDlvbrlQuantityUnit` |  | |  |  |  |  |
| `EntProjElmntDlvbrlRevnAmount` |  | |  |  |  |  |
| `PlndEffortQty` |  | |  |  |  |  |
| `UnitOfMeasure` |  | |  |  |  |  |
| `PlndCostAmt` |  | |  |  |  |  |
| `PlndRevnAmt` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `_Project` |  | |  |  |  |  |
| `_EnterpriseProjectForUser` |  | |  |  |  |  |
| `_EntProjElmntDlvbrlTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EntProjElmntDlvbrlTypeText` | `I_EntProjElmntDlvbrlTypeText` | [0..1] |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@EndUserText.label: 'Work package attributes and planned KPIs'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:{
    serviceQuality: #C,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #NONE
}
@VDM:{
  viewType: #COMPOSITE
}

define view entity I_EntPrjElmntProfnlSrvcPlndKPI
  as select from           I_EnterpriseProjectElement    as EnterpriseProjectElement
    left outer to one join I_EntProjElmntDlvbrlRevenue   as EntProjElmntDlvbrlRevenue   on  EntProjElmntDlvbrlRevenue.ProjectElementUUID = EnterpriseProjectElement.ProjectElementUUID
                                                                                        and EntProjElmntDlvbrlRevenue.ProjectUUID        = EnterpriseProjectElement.ProjectUUID
    left outer to one join P_EntPrjElmntWrkDmndPlndEfrts as EntPrjElmntWrkDmndPlndEfrts on  EntPrjElmntWrkDmndPlndEfrts.ReferencedObjectUUID = EnterpriseProjectElement.ProjectElementUUID
                                                                                        and EntPrjElmntWrkDmndPlndEfrts.ProjectUUID          = EnterpriseProjectElement.ProjectUUID
    left outer to one join P_EntPrjElmntDmndPlndCostRevn as EntPrjElmntDmndPlndCostRevn on  EntPrjElmntDmndPlndCostRevn.ReferencedObjectUUID = EnterpriseProjectElement.ProjectElementUUID
                                                                                        and EntPrjElmntDmndPlndCostRevn.ProjectUUID          = EnterpriseProjectElement.ProjectUUID
  association [0..1] to I_EntProjElmntDlvbrlTypeText as _EntProjElmntDlvbrlTypeText on  _EntProjElmntDlvbrlTypeText.EntProjElmntDeliverableType = $projection.EntProjElmntDeliverableType
                                                                                    and _EntProjElmntDlvbrlTypeText.Language                    = $session.system_language
{
  key EnterpriseProjectElement.ProjectUUID                     as ProjectUUID,
  key EnterpriseProjectElement.ProjectElementUUID              as ProjectElementUUID,
      EnterpriseProjectElement._Project.Project                as Project,
      EnterpriseProjectElement.ProjectElement                  as ProjectElement,
      EnterpriseProjectElement.ProjectElementDescription       as ProjectElementDescription,
      EnterpriseProjectElement.PlannedStartDate                as PlannedStartDate,
      EnterpriseProjectElement.PlannedEndDate                  as PlannedEndDate,
      EnterpriseProjectElement.EntProjectElementType           as EntProjectElementType,

      @ObjectModel.text.association: '_EntProjElmntDlvbrlTypeText'
      EntProjElmntDlvbrlRevenue.EntProjElmntDeliverableType    as EntProjElmntDeliverableType,
      @Semantics.quantity.unitOfMeasure : 'EntProjElmntDlvbrlQuantityUnit'
      EntProjElmntDlvbrlRevenue.EntProjElmntDlvbrlQuantity     as EntProjElmntDlvbrlQuantity,
      EntProjElmntDlvbrlRevenue.EntProjElmntDlvbrlQuantityUnit as EntProjElmntDlvbrlQuantityUnit,
      @Semantics.amount.currencyCode: 'Currency'
      EntProjElmntDlvbrlRevenue.EntProjElmntDlvbrlRevnAmount   as EntProjElmntDlvbrlRevnAmount,

      @EndUserText.label: 'Planned Efforts'
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      EntPrjElmntWrkDmndPlndEfrts.PlndEffortQty                as PlndEffortQty,
      @UI.hidden: true
      EntPrjElmntWrkDmndPlndEfrts.UnitOfMeasure                as UnitOfMeasure,

      @EndUserText.label: 'Planned Cost'
      @Semantics.amount.currencyCode: 'Currency'
      EntPrjElmntDmndPlndCostRevn.PlndCostAmt                  as PlndCostAmt,
      @EndUserText.label: 'Planned Revenue'
      @Semantics.amount.currencyCode: 'Currency'
      EntPrjElmntDmndPlndCostRevn.PlndRevnAmt                  as PlndRevnAmt,
     
      @UI.hidden: true
      EnterpriseProjectElement._Project.Currency               as Currency,

      _EntProjElmntDlvbrlTypeText,

      @Consumption.hidden: true
      EnterpriseProjectElement._Project                        as _Project,
      @Consumption.hidden: true
      EnterpriseProjectElement._EnterpriseProjectForUser       as _EnterpriseProjectForUser
}
where
       EnterpriseProjectElement._Project.ProjectCategory = '7'
  and(
       EnterpriseProjectElement.EntProjectElementType    = '0P_TSK_0003'
    or EnterpriseProjectElement.EntProjectElementType    = '0P_TSK_0004'
  )
  and  EnterpriseProjectElement.WBSElementIsBillingElement = ''
```
