---
name: I_CNTRLSUPLRCONFWRKFLWCARD
description: "Cntrlsuplrconfwrkflwcard"
app_component: MM-PUR-HUB-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - workflow
  - component:MM-PUR-HUB-PO-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLSUPLRCONFWRKFLWCARD

**Cntrlsuplrconfwrkflwcard**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralSupplierConfirmation` | ✓ | |  |  |  |  |
| `ProcurementHubSourceSystem` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingDocumentType` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `SupplierName` |  | |  | `case when _ProcmtHubSupplier.ProcmtHubSupplierName = '' or _ProcmtHubSupplier.ProcmtHubSupplierName is null then Supplier else _ProcmtHubSupplier.ProcmtHubSupplierName end` |  |  |
| `DocumentCurrency` |  | | `_SupplierConfirmationItem` | `DocumentCurrency` |  |  |
| `SupplierConfirmedNetPrice` |  | |  | `sum(case when _SupplierConfirmationItem.SupplierConfirmedNetPrice = 0 then division(_SupplierConfirmationItem._CentralPurchaseOrderItem.NetPriceAmount * _SupplierConfirmationItem._SupplierConfirmationLine.ConfirmedQuantity *_SupplierConfirmationItem._CentralPurchaseOrderItem.OrderPriceUnitToOrderUnitNmrtr , ( _SupplierConfirmationItem._CentralPurchaseOrderItem.NetPriceQuantity * _SupplierConfirmationItem._CentralPurchaseOrderItem.OrdPriceUnitToOrderUnitDnmntr),2 ) else division(_SupplierConfirmationItem.SupplierConfirmedNetPrice * _SupplierConfirmationItem._SupplierConfirmationLine.ConfirmedQuantity *_SupplierConfirmationItem._CentralPurchaseOrderItem.OrderPriceUnitToOrderUnitNmrtr , ( _SupplierConfirmationItem._CentralPurchaseOrderItem.NetPriceQuantity * _SupplierConfirmationItem._CentralPurchaseOrderItem.OrdPriceUnitToOrderUnitDnmntr), 2 ) end )` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProcmtHubSupplier` | `I_ProcmtHubSupplier` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICSCWRKFLWCRD'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern : #NONE
@EndUserText.label: 'ToDo Workflow Card info Cntrl Suplr Conf'
@Workflow: { enabledFor: [ #CUSTOM_TASK_ATTRIBUTES ] }

define view I_CntrlSuplrConfWrkflwCard as select from R_CentralSupplierConfirmation
association [0..1] to I_ProcmtHubSupplier          as _ProcmtHubSupplier          on  _ProcmtHubSupplier.ProcmtHubFixedSupplier     = R_CentralSupplierConfirmation.Supplier
                                                                                        and _ProcmtHubSupplier.ProcurementHubSourceSystem = R_CentralSupplierConfirmation.ProcurementHubSourceSystem
{
    key CentralSupplierConfirmation,
           ProcurementHubSourceSystem,
           PurchasingOrganization, 
           PurchasingDocumentType,
           PurchasingGroup, 
           case  when _ProcmtHubSupplier.ProcmtHubSupplierName = '' or _ProcmtHubSupplier.ProcmtHubSupplierName is null then Supplier
              else _ProcmtHubSupplier.ProcmtHubSupplierName
              end as SupplierName,
           
           _SupplierConfirmationItem.DocumentCurrency as DocumentCurrency,
//           
           @EndUserText.label: 'Net Value'
           sum(case when _SupplierConfirmationItem.SupplierConfirmedNetPrice = 0 then
                                    division(_SupplierConfirmationItem._CentralPurchaseOrderItem.NetPriceAmount * _SupplierConfirmationItem._SupplierConfirmationLine.ConfirmedQuantity *_SupplierConfirmationItem._CentralPurchaseOrderItem.OrderPriceUnitToOrderUnitNmrtr , ( _SupplierConfirmationItem._CentralPurchaseOrderItem.NetPriceQuantity * _SupplierConfirmationItem._CentralPurchaseOrderItem.OrdPriceUnitToOrderUnitDnmntr),2 )
                            else   division(_SupplierConfirmationItem.SupplierConfirmedNetPrice * _SupplierConfirmationItem._SupplierConfirmationLine.ConfirmedQuantity *_SupplierConfirmationItem._CentralPurchaseOrderItem.OrderPriceUnitToOrderUnitNmrtr , ( _SupplierConfirmationItem._CentralPurchaseOrderItem.NetPriceQuantity * _SupplierConfirmationItem._CentralPurchaseOrderItem.OrdPriceUnitToOrderUnitDnmntr), 2 )
                            end  
                  ) as SupplierConfirmedNetPrice
} group by CentralSupplierConfirmation, ProcurementHubSourceSystem, PurchasingOrganization, PurchasingDocumentType, PurchasingGroup,  _ProcmtHubSupplier.ProcmtHubSupplierName, Supplier,  _SupplierConfirmationItem.DocumentCurrency
```
