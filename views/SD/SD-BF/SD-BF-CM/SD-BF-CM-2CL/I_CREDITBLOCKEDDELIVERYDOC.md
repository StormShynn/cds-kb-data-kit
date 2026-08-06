---
name: I_CREDITBLOCKEDDELIVERYDOC
description: CREDITBLOCKEDDelivery Document
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-CM
  - interface-view
  - delivery-document
  - delivery
  - credit
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
---
# I_CREDITBLOCKEDDELIVERYDOC

**CREDITBLOCKEDDelivery Document**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DeliveryDocument` | `DeliveryDocument` |
| `SDDocumentCategory` | `SDDocumentCategory` |
| `SalesOrganization` | `SalesOrganization` |
| `SalesOffice` | `SalesOffice` |
| `ShippingPoint` | `ShippingPoint` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `SoldToParty` | `SoldToParty` |
| `CustomerCreditAccount` | `CustomerCreditAccount` |
| `ControllingAreaCurrency` | `ControllingAreaCurrency` |
| `ReleasedCreditAmount` | `ReleasedCreditAmount` |
| `CreditBlockReleaseDate` | `CreditBlockReleaseDate` |
| `NextShippingDate` | `NextShippingDate` |
| `SalesDocumentRjcnReason` | `cast( ' ' as abgru_va )` |
| `CentralCreditChkTechErrSts` | `CentralCreditChkTechErrSts` |
| `OverallSDProcessStatus` | `OverallSDProcessStatus` |
| `OverallGoodsMovementStatus` | `OverallGoodsMovementStatus` |
| `TotalCreditCheckStatus` | `TotalCreditCheckStatus` |
| `FinDocCreditCheckStatus` | `FinDocCreditCheckStatus` |
| `CentralCreditCheckStatus` | `CentralCreditCheckStatus` |
| `_SoldToParty` | *Association* |
| `_ShippingPoint` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesOrganization` | *Association* |
| `_CentralCreditChkTechErrSts` | *Association* |
| `_OverallSDProcessStatus` | *Association* |
| `_OverallGoodsMovementStatus` | *Association* |
| `_TotalCreditCheckStatus` | *Association* |
| `_FinDocCreditCheckStatus` | *Association* |
| `_CentralCreditCheckStatus` | *Association* |
| `_ControllingAreaCurrency` | *Association* |
| `_SDDocumentCategory` | *Association* |
| `_SalesDocumentRjcnReason` | *Association* |
| `_CustomerCreditAccount` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_ShippingPoint` | `I_ShippingPoint` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_CentralCreditChkTechErrSts` | `I_CentralCreditChkTechErrSts` | [0..1] |
| `_OverallSDProcessStatus` | `I_OverallSDProcessStatus` | [0..1] |
| `_OverallGoodsMovementStatus` | `I_OverallGoodsMovementStatus` | [0..1] |
| `_TotalCreditCheckStatus` | `I_TotalCreditCheckStatus` | [0..1] |
| `_FinDocCreditCheckStatus` | `I_FinDocCreditCheckStatus` | [0..1] |
| `_CentralCreditCheckStatus` | `I_CentralCreditCheckStatus` | [0..1] |
| `_ControllingAreaCurrency` | `I_Currency` | [0..1] |
| `_SDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_SalesDocumentRjcnReason` | `I_SalesDocumentRjcnReason` | [0..1] |
| `_Extension` | `E_DeliveryDocument` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ICRDTBLKDDELIV'
@VDM: {
  viewType:#COMPOSITE
}
@AbapCatalog.compiler.compareFilter: true
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #REQUIRED
}
@ObjectModel:{
   representativeKey: 'DeliveryDocument',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #L
}
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Credit Blocked Delivery Document'
define view I_CreditBlockedDeliveryDoc
  as select from I_DeliveryDocument
  association [0..1] to I_Customer                   as _SoldToParty                on $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_ShippingPoint              as _ShippingPoint              on $projection.ShippingPoint = _ShippingPoint.ShippingPoint
  association [0..1] to I_SalesOffice                as _SalesOffice                on $projection.SalesOffice = _SalesOffice.SalesOffice
  association [0..1] to I_SalesOrganization          as _SalesOrganization          on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_CentralCreditChkTechErrSts as _CentralCreditChkTechErrSts on $projection.CentralCreditChkTechErrSts = _CentralCreditChkTechErrSts.CentralCreditChkTechErrSts
  association [0..1] to I_OverallSDProcessStatus     as _OverallSDProcessStatus     on $projection.OverallSDProcessStatus = _OverallSDProcessStatus.OverallSDProcessStatus
  association [0..1] to I_OverallGoodsMovementStatus as _OverallGoodsMovementStatus on $projection.OverallGoodsMovementStatus = _OverallGoodsMovementStatus.OverallGoodsMovementStatus
  association [0..1] to I_TotalCreditCheckStatus     as _TotalCreditCheckStatus     on $projection.TotalCreditCheckStatus = _TotalCreditCheckStatus.TotalCreditCheckStatus
  association [0..1] to I_FinDocCreditCheckStatus    as _FinDocCreditCheckStatus    on $projection.FinDocCreditCheckStatus = _FinDocCreditCheckStatus.FinDocCreditCheckStatus
  association [0..1] to I_CentralCreditCheckStatus   as _CentralCreditCheckStatus   on $projection.CentralCreditCheckStatus = _CentralCreditCheckStatus.CentralCreditCheckStatus
  association [0..1] to I_Currency                   as _ControllingAreaCurrency    on $projection.ControllingAreaCurrency = _ControllingAreaCurrency.Currency
  association [0..1] to I_SDDocumentCategory         as _SDDocumentCategory         on $projection.SDDocumentCategory = _SDDocumentCategory.SDDocumentCategory
  association [0..1] to I_SalesDocumentRjcnReason    as _SalesDocumentRjcnReason    on $projection.SalesDocumentRjcnReason = _SalesDocumentRjcnReason.SalesDocumentRjcnReason
  //Extensibility
  association [0..1] to E_DeliveryDocument           as _Extension                  on $projection.DeliveryDocument = _Extension.DeliveryDocument
{

      //Key
  key DeliveryDocument,
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      SDDocumentCategory,

      //Sales Org
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ShippingPointStdVH', element: 'ShippingPoint' } } ]
      ShippingPoint,

      //Admin
      @Semantics.systemDate.createdAt: true
      CreatedByUser,
      CreationDate,
      LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,

      //Creidt
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.foreignKey.association: '_CustomerCreditAccount'
      CustomerCreditAccount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ControllingAreaCurrency'
      ControllingAreaCurrency,
      @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
      ReleasedCreditAmount,
      CreditBlockReleaseDate,
      NextShippingDate,
      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      @Consumption.hidden: true
      cast( '  ' as abgru_va ) as SalesDocumentRjcnReason,

      //Status
      @ObjectModel.foreignKey.association: '_CentralCreditChkTechErrSts'
      CentralCreditChkTechErrSts,
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      OverallSDProcessStatus,
      @ObjectModel.foreignKey.association: '_OverallGoodsMovementStatus'
      OverallGoodsMovementStatus,
      @ObjectModel.foreignKey.association: '_TotalCreditCheckStatus'
      TotalCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_FinDocCreditCheckStatus'
      FinDocCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_CentralCreditCheckStatus'
      CentralCreditCheckStatus,

      //Association
      _SalesOffice,
      _ShippingPoint,
      _SoldToParty,
      _ControllingAreaCurrency,
      _SalesOrganization,
      _CustomerCreditAccount,
      _CentralCreditChkTechErrSts,
      _OverallSDProcessStatus,
      _OverallGoodsMovementStatus,
      _TotalCreditCheckStatus,
      _FinDocCreditCheckStatus,
      _CentralCreditCheckStatus,
      _SDDocumentCategory,
      _SalesDocumentRjcnReason
}
where
  TotalCreditCheckStatus = 'B' and OverallSDProcessStatus <> 'C'
```
