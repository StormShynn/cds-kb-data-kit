---
name: C_CNTRLCONTRACTCNSMPN
description: "Cntrlcontractcnsmpn"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - contract
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_CNTRLCONTRACTCNSMPN

**Cntrlcontractcnsmpn**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` | ✓ | |  |  |  |  |
| `CentralPurchaseContractItem` | ✓ | |  |  |  |  |
| `DistributionKey` | ✓ | |  |  |  |  |
| `PurchaseContractType` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `ProcmtHubPurchasingOrg` |  | |  |  |  |  |
| `ProcmtHubPurchasingGroup` |  | |  |  |  |  |
| `ProcmtHubPlant` |  | |  |  |  |  |
| `CompanyCodeName` |  | |  | `ProcmtHubCompanyCode` |  |  |
| `ProcmtHubCompanyCode` |  | |  |  |  |  |
| `CalendarYear` |  | | `_RelevantDates` | `CalendarYear` |  |  |
| `CalendarQuarter` |  | | `_RelevantDates` | `CalendarQuarter` |  |  |
| `CalendarMonth` |  | | `_RelevantDates` | `CalendarMonth` |  |  |
| `CalendarWeek` |  | | `_RelevantDates` | `CalendarWeek` |  |  |
| `ProcmtHubPurchasingGroupName` |  | | `_HubPurchasingGroup` | `ProcmtHubPurchasingGroupName` |  |  |
| `ProcmtHubPlantName` |  | | `_HubPlant` | `ProcmtHubPlantName` |  |  |
| `ProcmtHubCompanyCodeName` |  | | `_HubCompanyCode` | `ProcmtHubCompanyCodeName` |  |  |
| `ProcmtHubPurgOrgName` |  | | `_HubPurchasingOrg` | `ProcmtHubPurgOrgName` |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  |  |  |  |
| `TargetQuantity` |  | |  |  |  |  |
| `TargetAmount` |  | |  |  |  |  |
| `ReleaseOrderItemNetAmount` |  | |  |  |  |  |
| `ReleaseOrderItemOrderQuantity` |  | |  |  |  |  |
| `ProcurementHubSourceSystem` |  | |  |  |  |  |
| `PurgDocChangeRequestStatus` |  | |  |  |  |  |
| `_HubPurchasingOrg` | | ✓ | | | | |
| `_HubPurchasingGroup` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_HubPlant` | | ✓ | | | | |
| `_HubPlant_2` | | ✓ | | | | |
| `_HubCompanyCode` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BackendSourceSystem` | | ✓ | | | | |
| `_VersionType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RelevantDates` | `I_CalendarDate` | [1..1] |
| `_HubPurchasingOrg` | `I_ProcmtHubPurgOrgAPI01` | [1..1] |
| `_HubPurchasingGroup` | `I_ProcmtHubPurgGroupAPI01` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_HubPlant` | `I_ProcmtHubPlant` | [1..1] |
| `_HubPlant_2` | `I_ProcmtHubPlant` | [1..1] |
| `_HubCompanyCode` | `I_ProcmtHubCompanyCode` | [1..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [1..1] |
| `_Product` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_BackendSourceSystem` | `I_ProcmtHubBackendSourceSystem` | [1..1] |
| `_VersionType` | `I_CntrlPurContrChgReqStatus` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED 
@ObjectModel.usageType.serviceQuality:  #D
@ObjectModel.usageType.sizeCategory: #L 
@AbapCatalog.sqlViewName: 'CNTRLCONTRCNSMPN'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.viewType : #CONSUMPTION
@Analytics.dataCategory: #CUBE
@EndUserText.label: 'Central contract consumption cube view'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

define view C_CntrlContractCnsmpn 

with parameters
    P_DisplayCurrency : displaycurrency,

    P_StartDate: vdm_validitystart,
    
    P_EndDate: vdm_validitystart
    

            as select from P_CntrlPurContractItems ( P_DisplayCurrency: $parameters.P_DisplayCurrency,
                                                         P_StartDate: $parameters.P_StartDate,
                                                         P_EndDate: $parameters.P_EndDate ) as CentrlContractItems
            association [1..1] to I_CalendarDate as _RelevantDates on CentrlContractItems.ValidityStartDate = _RelevantDates.CalendarDate
 //           association [1..1] to I_PurchasingCategoryMatlGroup as _PurchasingCategoryMatlGroup on CentrlContractItems.MaterialGroup = _PurchasingCategoryMatlGroup.MaterialGroup
            association[1..1] to I_ProcmtHubPurgOrgAPI01 as _HubPurchasingOrg on $projection.ProcurementHubSourceSystem = _HubPurchasingOrg.ProcurementHubSourceSystem
                                                                and $projection.ProcmtHubPurchasingOrg = _HubPurchasingOrg.ProcmtHubPurchasingOrg
            association[1..1] to I_ProcmtHubPurgGroupAPI01 as _HubPurchasingGroup on $projection.ProcurementHubSourceSystem = _HubPurchasingGroup.ProcurementHubSourceSystem
                                                                    and $projection.ProcmtHubPurchasingGroup = _HubPurchasingGroup.ProcmtHubPurchasingGroup
            association [1..1] to I_Supplier as _Supplier   on  $projection.Supplier = _Supplier.Supplier
                                                             // and $projection.CompanyCode = _Supplier.CompanyCode
                                                              
            association[1..1] to I_ProcmtHubPlant as _HubPlant on $projection.ProcmtHubPlant = _HubPlant.ProcmtHubPlant 
                                                      and $projection.ProcmtHubCompanyCode = _HubPlant.ProcmtHubCompanyCode
                                                      and $projection.ProcurementHubSourceSystem = _HubPlant.ProcurementHubSourceSystem
            
            association[1..1] to I_ProcmtHubPlant as _HubPlant_2 on $projection.ProcmtHubPlant = _HubPlant_2.ProcmtHubPlant 
                                                      and $projection.CompanyCodeName = _HubPlant_2.ProcmtHubCompanyCode
                                                      and $projection.ProcurementHubSourceSystem = _HubPlant_2.ProcurementHubSourceSystem
                                                                                                
            association[1..1] to I_ProcmtHubCompanyCode as _HubCompanyCode on  $projection.CompanyCodeName = _HubCompanyCode.ProcmtHubCompanyCode // ProcmtHubCompanyCode
                                                                  and  $projection.ProcurementHubSourceSystem = _HubCompanyCode.ProcurementHubSourceSystem                                                              
//            association[1..1] to I_MaterialGroup as _MaterialGroup on $projection.MaterialGroup = _MaterialGroup.MaterialGroup
            association[1..1] to I_ProductGroup_2 as _ProductGroup on $projection.MaterialGroup = _ProductGroup.ProductGroup
                                                                                                                       
//            association[1..1] to I_Material as _Material on $projection.Material = _Material.Material
            
            association[1..1] to I_Product as _Product on $projection.Material = _Product.Product
               
            association[1..1] to I_Plant as _Plant on $projection.Plant = _Plant.Plant       
            association[1..1] to I_PurchasingOrganization as _PurchasingOrganization on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization                                                                                             
            association[1..1] to I_PurchasingGroup as _PurchasingGroup on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
            association[1..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
            association[1..1] to I_ProcmtHubBackendSourceSystem as _BackendSourceSystem on $projection.ProcurementHubSourceSystem = _BackendSourceSystem.ProcurementHubSourceSystem
            association [1..1] to I_CntrlPurContrChgReqStatus  as _VersionType                 on $projection.PurgDocChangeRequestStatus = _VersionType.PurgDocChangeRequestStatus
            {
                key CentralPurchaseContract, 
                key CentralPurchaseContractItem, 
                key DistributionKey, 
                
                PurchaseContractType,
                @ObjectModel.foreignKey.association: '_Supplier'
                Supplier,
                @ObjectModel.foreignKey.association: '_PurchasingGroup'
                PurchasingGroup, 
                @ObjectModel.foreignKey.association: '_PurchasingOrganization'
                PurchasingOrganization,
                @ObjectModel.foreignKey.association: '_CompanyCode'
                CompanyCode,
                @ObjectModel.foreignKey.association: '_Plant'
                Plant,
                
                @Semantics.unitOfMeasure: true
                OrderQuantityUnit,
                
                @ObjectModel.foreignKey.association: '_Product'
                Material,

                @ObjectModel.foreignKey.association: '_ProductGroup'
                MaterialGroup,
                
//                @ObjectModel.text.element: ['PurgCatName'] 
//                _PurchasingCategoryMatlGroup._PurchasingCategory.PurchasingCategory,
//                 @Semantics.text: true
//                _PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName,
                                
                PurchasingDocumentCategory,
                
                @ObjectModel.foreignKey.association: '_HubPurchasingOrg'
                ProcmtHubPurchasingOrg,
                
                @ObjectModel.foreignKey.association: '_HubPurchasingGroup'
                ProcmtHubPurchasingGroup,
                
                
                //@ObjectModel.foreignKey.association: '_HubPlant'
                @ObjectModel.foreignKey.association: '_HubPlant_2'                
                ProcmtHubPlant,
                
               // The issue was Basic chars. for fields PROCMTHUBCOMPANYCODE (ODP CNTRLCONTRCNSMPN) and field PROCMTHUBCOMPANYCODE 
               //(ODP IPROCMTHUBPLT) do not match.
               // This is an incompatible change where adding a foreign-key association to an element that does already have a text
               // association and is not annotated with @Analytics.internalName: #LOCAL. So to handle the situation, we have added a
               // copy of the element to the view with the set of intended associations and annotations, and annotate the original 
               // element with @VDM.lifecycle.status:#DEPRECATED and @VDM.lifecycle.successor to inform all consuming views and 
               // software components about the change.
                
                @Analytics.internalName: #LOCAL
                @ObjectModel.foreignKey.association: '_HubCompanyCode'                
                ProcmtHubCompanyCode as CompanyCodeName,

                //@ObjectModel.foreignKey.association: ''
                @VDM.lifecycle.status:#DEPRECATED 
                @VDM.lifecycle.successor:'CompanyCodeName'
                ProcmtHubCompanyCode,                                
                @Semantics.calendar.year: true
                _RelevantDates.CalendarYear as CalendarYear, 
                _RelevantDates.CalendarQuarter as CalendarQuarter, 
                _RelevantDates.CalendarMonth as CalendarMonth, 
                _RelevantDates.CalendarWeek as CalendarWeek, 
                
                _HubPurchasingGroup.ProcmtHubPurchasingGroupName,
                _HubPlant.ProcmtHubPlantName,
                _HubCompanyCode.ProcmtHubCompanyCodeName as ProcmtHubCompanyCodeName,
                _HubPurchasingOrg.ProcmtHubPurgOrgName, 
                 
                
                ValidityStartDate,
                ValidityEndDate,               
                
                @Semantics.currencyCode: true
                DisplayCurrency, 
                
                @DefaultAggregation: #SUM
                @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
                TargetQuantity, 
                
                @DefaultAggregation: #SUM
                @Semantics.amount.currencyCode: 'DisplayCurrency'
                TargetAmount,
                 
                @DefaultAggregation: #SUM
                @Semantics.amount.currencyCode: 'DisplayCurrency'
                ReleaseOrderItemNetAmount,
                
                @DefaultAggregation: #SUM
                @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
                ReleaseOrderItemOrderQuantity,
                
                @ObjectModel.foreignKey.association: '_BackendSourceSystem'
                ProcurementHubSourceSystem,               
                
                
                @Analytics.internalName: #LOCAL
                @ObjectModel.foreignKey.association: '_VersionType'                
                CentrlContractItems.PurgDocChangeRequestStatus,
                
                _HubPlant_2,
                @API.element.releaseState: #DEPRECATED
                @API.element.successor: '_HubPlant_2'
                _HubPlant,                
                _HubPurchasingGroup,
                _HubPurchasingOrg,
                _HubCompanyCode, 
                _Supplier,
                _ProductGroup,
                _Product,
                _Plant,
                _PurchasingGroup,
                _PurchasingOrganization,
                _BackendSourceSystem,
                _CompanyCode,
                _VersionType
            }
```
