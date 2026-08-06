---
name: I_JVAVENTURECOSTOBJECTDETS_2
description: Jvaventurecostobjectdets 2
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVAVENTURECOSTOBJECTDETS_2

**Jvaventurecostobjectdets 2**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `_JointVentureMasterFld.CompanyCode` |
| key `JntOpgAgrmt` | `_JointVentureMasterFld.JntOpgAgrmt` |
| key `JointVenture` | `_JointVentureMasterFld.JointVenture` |
| key `CostCenter` | `_JointVentureCostCenter.CostCenter` |
| key `WBSElement` | `_JointVentureProjectData.WBSElement` |
| key `InternalOrder` | `_JointVentureOrderData.InternalOrder` |
| `JntOpgAgrmtClass` | `_JntOpgAgrmt.JntOpgAgrmtClass` |
| `JointVentureType` | `_JointVentureMasterFld.JointVentureType` |
| `JointVentureOperator` | `_JointVentureMasterFld.JointVentureOperator` |
| `JVAVentureClass` | `_JointVentureMasterFld.JVAVentureClass` |
| `JntVntrBillgCutbackIsBlk` | `_JointVentureMasterFld.JntVntrBillgCutbackIsBlk` |
| `JntVntrDrillingPayRate` | `_JointVentureMasterFld.JntVntrDrillingPayRate` |
| `JntVntrNonDrillingPayRate` | `_JointVentureMasterFld.JntVntrNonDrillingPayRate` |
| `JntVntrParentCoOvhdExpnCostCtr` | `_JointVentureMasterFld.JntVntrParentCoOvhdExpnCostCtr` |
| `JntVntrParentCoOvhdProject` | `_JointVentureMasterFld.JntVntrParentCoOvhdProject` |
| `JntVntrParentCoOvhdExpnOrder` | `_JointVentureMasterFld.JntVntrParentCoOvhdExpnOrder` |
| `JntVntrSubstituteCostCtr` | `_JointVentureMasterFld.JntVntrSubstituteCostCtr` |
| `JntVntrProperty` | `_JointVentureMasterFld.JntVntrProperty` |
| `ControllingArea` | `_JointVentureCostCenter.ControllingArea` |
| `ValidityEndDate` | `_JointVentureCostCenter.ValidityEndDate` |
| `ValidityStartDate` | `_JointVentureCostCenter.ValidityStartDate` |
| `CostCenterCategory` | `_JointVentureCostCenter.CostCenterCategory` |
| `ProfitCenter` | `_JointVentureCostCenter.ProfitCenter` |
| `FunctionalArea` | `_JointVentureCostCenter.FunctionalArea` |
| `JointVentureRecoveryCode` | `_JointVentureCostCenter.JointVentureRecoveryCode` |
| `JointVentureEquityType` | `_JointVentureCostCenter.JointVentureEquityType` |
| `JointVentureObjectType` | `_JointVentureCostCenter.JointVentureObjectType` |
| `JointVentureClass` | `_JointVentureCostCenter.JointVentureClass` |
| `JointVentureSubClass` | `_JointVentureCostCenter.JointVentureSubClass` |
| `WBSDescription` | `_JointVentureProjectData.WBSDescription` |
| `WBSElementShortID` | `_JointVentureProjectData.WBSElementShortID` |
| `ProjectType` | `_JointVentureProjectData.ProjectType` |
| `WBSElementHierarchyLevel` | `_JointVentureProjectData.WBSElementHierarchyLevel` |
| `WBSElementIsPlanningElement` | `_JointVentureProjectData.WBSElementIsPlanningElement` |
| `WBSIsAccountAssignmentElement` | `_JointVentureProjectData.WBSIsAccountAssignmentElement` |
| `WBSElementIsBillingElement` | `_JointVentureProjectData.WBSElementIsBillingElement` |
| `NetworkAssignmentType` | `_JointVentureProjectData.NetworkAssignmentType` |
| `RequestingCostCenter` | `_JointVentureProjectData.RequestingCostCenter` |
| `ResponsibleCostCenter` | `_JointVentureProjectData.ResponsibleCostCenter` |
| `FunctionalLocation` | `_JointVentureProjectData.FunctionalLocation` |
| `JointVentureCostRecoveryCode` | `_JointVentureProjectData.JointVentureCostRecoveryCode` |
| `JntVntrProjectType` | `_JointVentureProjectData.JntVntrProjectType` |
| `OrderType` | `_JointVentureOrderData.OrderType` |
| `OrderCategory` | `_JointVentureOrderData.OrderCategory` |
| `ReferenceOrder` | `_JointVentureOrderData.ReferenceOrder` |
| `InternalOrderDescription` | `_JointVentureOrderData.InternalOrderDescription` |
| `Currency` | `_CompanyCode.Currency` |
| `_CompanyCode` | *Association* |
| `_JntOpgAgrmt` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntOpgAgrmt` | `I_JntOpgAgrmt` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVACOSTOBJECT_2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Joint Venture Cost Object Details'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL }
@ObjectModel: { usageType: { sizeCategory: #XL,
                             dataClass:  #MIXED,
                             serviceQuality: #D },
                supportedCapabilities: [#ANALYTICAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #UI_PROVIDER_PROJECTION_SOURCE ],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE
      }
// This view is successor view of deprecated view I_JVAVentureCostObjectDetails
define view I_JVAVentureCostObjectDets_2
  as select from            I_JointVentureMasterFld as _JointVentureMasterFld

    left outer to many join I_CostCenter            as _JointVentureCostCenter  on  _JointVentureMasterFld.CompanyCode  = _JointVentureCostCenter.CompanyCode
                                                                                and _JointVentureMasterFld.JointVenture = _JointVentureCostCenter.JointVenture

    left outer to many join I_WBSElementData_2      as _JointVentureProjectData on  _JointVentureMasterFld.CompanyCode  = _JointVentureProjectData.CompanyCode
                                                                                and _JointVentureMasterFld.JointVenture = _JointVentureProjectData.JointVenture

    left outer to many join I_JointVentureOrderData as _JointVentureOrderData   on  _JointVentureMasterFld.CompanyCode  = _JointVentureOrderData.CompanyCode
                                                                                and _JointVentureMasterFld.JointVenture = _JointVentureOrderData.JointVenture

  association [1..1] to I_CompanyCode as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_JntOpgAgrmt as _JntOpgAgrmt on  _JointVentureMasterFld.CompanyCode = _JntOpgAgrmt.CompanyCode
                                                      and _JointVentureMasterFld.JntOpgAgrmt = _JntOpgAgrmt.JntOpgAgrmt

{
        @ObjectModel.foreignKey.association: '_CompanyCode'
        @Consumption.valueHelpDefinition: [
             { entity:  { name:    'I_JointVentureCompanyCodeVH',
                          element: 'CompanyCode' }
             }]
  key   _JointVentureMasterFld.CompanyCode,

        @ObjectModel.text.element: [ 'JntOpgAgrmtText' ]
        @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_JNTOPGAGRMTVH',
                         element: 'JntOpgAgrmt' }
            }]
  key   _JointVentureMasterFld.JntOpgAgrmt,

        @Consumption.valueHelpDefinition: [
                   { entity:  { name:    'I_JntVntrValueHelp',
                                element: 'JointVenture' }
                   }]
        @ObjectModel.text.element: [ 'JointVentureName' ]
  key   _JointVentureMasterFld.JointVenture,

        @Consumption.valueHelpDefinition: [
                          { entity:  { name:    'I_CostCenterStdVH',
                                       element: 'CostCenter' }
                          }]
        @ObjectModel.text.element: [ 'CostCenterName' ]
  key   _JointVentureCostCenter.CostCenter,

        @Consumption.valueHelpDefinition: [
                                 { entity:  { name:    'I_WBSELEMENTBASICDATASTDVH',
                                              element: 'WBSElementInternalID' }
                                 }]
        @ObjectModel.text.element: [ 'WBSDescription' ]
  key   _JointVentureProjectData.WBSElement,

        @Consumption.valueHelpDefinition: [
                                        { entity:  { name:    'I_InternalOrderStdVH',
                                                     element: 'InternalOrder' }
                                        }]
        @ObjectModel.text.element: [ 'InternalOrderDescription' ]
  key   _JointVentureOrderData.InternalOrder,

        _JntOpgAgrmt._JntOpgAgrmtText[1:Language = $session.system_language].JntOpgAgrmtText,

        _JntOpgAgrmt.JntOpgAgrmtClass,

        _JointVentureMasterFld._JointVentureDesc[1:Language = $session.system_language].JointVentureName,

        _JointVentureMasterFld.JointVentureType,

        _JointVentureMasterFld.JointVentureOperator,

        _JointVentureMasterFld.JVAVentureClass,

        _JointVentureMasterFld.JntVntrBillgCutbackIsBlk,

        _JointVentureMasterFld.JntVntrDrillingPayRate,

        _JointVentureMasterFld.JntVntrNonDrillingPayRate,

        _JointVentureMasterFld.JntVntrParentCoOvhdExpnCostCtr,

        _JointVentureMasterFld.JntVntrParentCoOvhdProject,

        _JointVentureMasterFld.JntVntrParentCoOvhdExpnOrder,

        _JointVentureMasterFld.JntVntrSubstituteCostCtr,

        _JointVentureMasterFld.JntVntrProperty,

        _JointVentureCostCenter.ControllingArea,

        _JointVentureCostCenter._Text[1:Language = $session.system_language].CostCenterName,

        _JointVentureCostCenter.ValidityEndDate,

        _JointVentureCostCenter.ValidityStartDate,

        _JointVentureCostCenter.CostCenterCategory,

        _JointVentureCostCenter.ProfitCenter,

        _JointVentureCostCenter.FunctionalArea,

        _JointVentureCostCenter.JointVentureRecoveryCode,

        _JointVentureCostCenter.JointVentureEquityType,

        _JointVentureCostCenter.JointVentureObjectType,

        _JointVentureCostCenter.JointVentureClass,

        _JointVentureCostCenter.JointVentureSubClass,

        _JointVentureProjectData.WBSDescription,

        _JointVentureProjectData.WBSElementShortID,

        _JointVentureProjectData.ProjectType,

        _JointVentureProjectData.WBSElementHierarchyLevel,

        _JointVentureProjectData.WBSElementIsPlanningElement,

        _JointVentureProjectData.WBSIsAccountAssignmentElement,

        _JointVentureProjectData.WBSElementIsBillingElement,

        _JointVentureProjectData.NetworkAssignmentType,

        _JointVentureProjectData.RequestingCostCenter,

        _JointVentureProjectData.ResponsibleCostCenter,

        _JointVentureProjectData.FunctionalLocation,

        _JointVentureProjectData.JointVentureCostRecoveryCode,

        _JointVentureProjectData.JntVntrProjectType,

        _JointVentureOrderData.OrderType,

        _JointVentureOrderData.OrderCategory,

        _JointVentureOrderData.ReferenceOrder,

        _JointVentureOrderData.InternalOrderDescription,

        _CompanyCode,
        _CompanyCode.Currency,
        _JntOpgAgrmt

}
```
