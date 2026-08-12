---
name: I_CUSTPROJSLSORD
description: "Custprojslsord"
app_component: SD-SLS-PBS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-PBS
  - interface-view
  - component:SD-SLS-PBS
  - lob:Sales & Distribution
---
# I_CUSTPROJSLSORD

**Custprojslsord**

| Property | Value |
|---|---|
| App Component | `SD-SLS-PBS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerProject` | ✓ | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderType` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `_CustProjSlsOrdItem` | | ✓ | | | | |
| `_CustProjSlsOrdPartner` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_CustomerProject` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_CustomerPaymentTerms` | | ✓ | | | | |
| `_CustomerAccountAssgmtGroup` | | ✓ | | | | |
| `_HeaderBillingBlockReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustProjSlsOrdItem` | `I_CustProjSlsOrdItem` | [0..*] |
| `_CustProjSlsOrdPartner` | `I_CustProjSlsOrdPartner` | [0..*] |
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_CustomerProject` | `I_CustomerProject` | [0..1] |
| `_Extension` | `E_SalesDocumentBasic` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTPROJSO'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@ObjectModel: {
   representativeKey: 'CustomerProject',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #L
   },
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Sales Order for Customer Project'

define view I_CustProjSlsOrd
  as select from I_CustomerProjectItem as Project
    inner join   I_SalesOrder          as SalesOrder on Project.CustomerProjectItem    = SalesOrder.SalesOrder
                                                     and(
                                                       Project.CustomerProjectItemType = '0SOH'
                                                     )


  association [0..*] to I_CustProjSlsOrdItem    as _CustProjSlsOrdItem    on $projection.SalesOrder = _CustProjSlsOrdItem.SalesOrder
  association [0..*] to I_CustProjSlsOrdPartner as _CustProjSlsOrdPartner on $projection.SalesOrder = _CustProjSlsOrdPartner.SalesOrder
  association [1..1] to I_SalesOrder            as _SalesOrder            on $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_CustomerProject       as _CustomerProject       on $projection.CustomerProject = _CustomerProject.CustomerProject

  //Extensibility
  association [0..1] to E_SalesDocumentBasic    as _Extension             on $projection.SalesOrder = _Extension.SalesDocument
{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CustomerProjectVH',
                     element: 'CustomerProject' }
        }]
      @ObjectModel.foreignKey.association: '_CustomerProject'
  key Project.CustomerProject,

      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrder.SalesOrder,

      @Consumption.hidden: true
      SalesOrder.SalesOrderType,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SalesOrder.SoldToParty,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesOrder.TotalNetAmount,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      SalesOrder.TransactionCurrency,

      SalesOrder.PurchaseOrderByCustomer,

      SalesOrder.CustomerPurchaseOrderDate,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrder.SalesOrganization,

      @ObjectModel.foreignKey.association: '_DistributionChannel'
      SalesOrder.DistributionChannel,

      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      SalesOrder.OrganizationDivision,

      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOrder.SalesOffice,

      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesOrder.SalesGroup,

      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      SalesOrder.CustomerPaymentTerms,
      
      SalesOrder.PaymentMethod,

      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      SalesOrder.CustomerAccountAssignmentGroup,

      @ObjectModel.foreignKey.association: '_HeaderBillingBlockReason'
      SalesOrder.HeaderBillingBlockReason,

      //Associations
      _CustomerProject,
      _SalesOrder,
      _CustProjSlsOrdItem,
      _CustProjSlsOrdPartner,
      _SoldToParty,
      _TransactionCurrency,
      _SalesOrganization,
      _DistributionChannel,
      _OrganizationDivision,
      _SalesOffice,
      _SalesGroup,
      _CustomerPaymentTerms,
      _CustomerAccountAssgmtGroup,
      _HeaderBillingBlockReason
}
```
