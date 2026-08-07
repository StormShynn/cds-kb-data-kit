---
name: I_BILLINGDUELISTITEM
description: Billingduelistitem
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - interface-view
  - billing
  - item-level
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# I_BILLINGDUELISTITEM

**Billingduelistitem**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentCategory` | ✓ | |  | `fktyp` |  |  |
| `BillingDocumentType` | ✓ | |  | `fkart` |  |  |
| `BillingDocumentDate` | ✓ | |  | `fkdat` |  |  |
| `SalesOrganization` | ✓ | |  | `vkorg` |  |  |
| `Customer` | ✓ | |  | `cast(kunnr as kunnr preserving type)` |  |  |
| `DestinationCountry` | ✓ | |  | `lland` |  |  |
| `ReferenceSDDocument` | ✓ | |  | `vbeln` |  |  |
| `ReferenceSDDocumentCategory` |  | |  | `vbtyp` |  |  |
| `ReferenceSDDocumentType` |  | |  | `vbart` |  |  |
| `AddressID` |  | |  | `cast(adrnr as adrnr preserving type)` |  |  |
| `AddressPersonID` |  | |  | `adrnp` |  |  |
| `AddressObjectType` |  | |  | `addr_type` |  |  |
| `HeaderBillingBlockReason` |  | |  | `faksk` |  |  |
| `SortCriterion` |  | |  | `sortkri` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `ShippingPoint` |  | |  | `vstel` |  |  |
| `OverallProofOfDeliveryStatus` |  | |  | `pdstk` |  |  |
| `NetAmount` |  | |  | `netwr` |  |  |
| `TransactionCurrency` |  | |  | `waerk` |  |  |
| `BillgDocReqRefLgclSyst` |  | |  | `bdr_ref_logsys` |  |  |
| `BillingDocRequestReference` |  | |  | `bdr_ref` |  |  |
| `BusinessSolutionOrder` |  | |  | `solution_order_id` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreationTime` |  | |  | `erzet` |  |  |
| `_BillingDocumentCategory` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_ReferenceSDDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_DfltAddrRprstn` | | ✓ | | | | |
| `_DestinationCountry` | | ✓ | | | | |
| `_HeaderBillingBlockReason` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_ShippingPoint` | | ✓ | | | | |
| `_OverallProofOfDelivStatus` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_BusinessSolutionOrder` | | ✓ | | | | |
| `_ShippingPointText` | | ✓ | | | | |
| `_BillingDocumentCategoryText` | | ✓ | | | | |
| `_BillingDocumentTypeText` | | ✓ | | | | |
| `_SalesOrganizationText` | | ✓ | | | | |
| `_DestinationCountryText` | | ✓ | | | | |
| `_RefSDDocumentCategoryText` | | ✓ | | | | |
| `_ReferenceSDDocumentTypeText` | | ✓ | | | | |
| `_HeaderBillingBlockReasonText` | | ✓ | | | | |
| `_DistributionChannelText` | | ✓ | | | | |
| `_DivisionText` | | ✓ | | | | |
| `_OverallProofOfDelivStatusText` | | ✓ | | | | |
| `_TransactionCurrencyText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingDocumentCategory` | `I_BillingDocumentCategory` | [0..1] |
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_ReferenceSDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_ReferenceSDDocumentType` | `I_SDDocumentType` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_DfltAddrRprstn` | `I_Address_2` | [0..1] |
| `_DestinationCountry` | `I_Country` | [0..1] |
| `_HeaderBillingBlockReason` | `I_BillingBlockReason` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_ShippingPoint` | `I_ShippingPoint` | [0..1] |
| `_OverallProofOfDelivStatus` | `I_OverallProofOfDelivStatus` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_BusinessSolutionOrder` | `I_ServiceDocumentEnhcd` | [0..1] |
| `_ShippingPointText` | `I_ShippingPointText` | [0..*] |
| `_BillingDocumentCategoryText` | `I_BillingDocumentCategoryText` | [0..*] |
| `_BillingDocumentTypeText` | `I_BillingDocumentTypeText_2` | [0..*] |
| `_SalesOrganizationText` | `I_SalesOrganizationText` | [0..*] |
| `_DestinationCountryText` | `I_CountryText` | [0..*] |
| `_RefSDDocumentCategoryText` | `I_SDDocumentCategoryText` | [0..*] |
| `_ReferenceSDDocumentTypeText` | `I_SDDocumentTypeText` | [0..*] |
| `_HeaderBillingBlockReasonText` | `I_BillingBlockReasonText` | [0..*] |
| `_DistributionChannelText` | `I_DistributionChannelText` | [0..*] |
| `_DivisionText` | `I_DivisionText` | [0..*] |
| `_OverallProofOfDelivStatusText` | `I_OverallProofOfDelivStatusT` | [0..*] |
| `_TransactionCurrencyText` | `I_CurrencyText` | [0..*] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IBILLDUELISTITEM'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: [ '_ShippingPointText', '_DfltAddrRprstn' ]

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Billing Due List Item'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #A, sizeCategory: #M }

@VDM.viewType: #BASIC

define view I_BillingDueListItem
  as select from vkdfs

  association [0..1] to I_BillingDocumentCategory     as _BillingDocumentCategory
    on $projection.BillingDocumentCategory = _BillingDocumentCategory.BillingDocumentCategory

  association [0..1] to I_BillingDocumentType         as _BillingDocumentType
    on $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType

  association [0..1] to I_SDDocumentCategory          as _ReferenceSDDocumentCategory
    on $projection.ReferenceSDDocumentCategory = _ReferenceSDDocumentCategory.SDDocumentCategory

  association [0..1] to I_SDDocumentType              as _ReferenceSDDocumentType
    on  $projection.ReferenceSDDocumentType     = _ReferenceSDDocumentType.SDDocumentType
    and $projection.ReferenceSDDocumentCategory = _ReferenceSDDocumentType.SDDocumentCategory

  association [0..1] to I_SalesOrganization           as _SalesOrganization
    on $projection.SalesOrganization = _SalesOrganization.SalesOrganization

  association [0..1] to I_Customer                    as _Customer
    on $projection.Customer = _Customer.Customer

  association [0..1] to I_Address_2                   as _DfltAddrRprstn
    on  $projection.AddressID = _DfltAddrRprstn.AddressID
    and $projection.AddressPersonID                = _DfltAddrRprstn.AddressPersonID
    and _DfltAddrRprstn.AddressRepresentationCode is initial

  association [0..1] to I_Country                     as _DestinationCountry
    on $projection.DestinationCountry = _DestinationCountry.Country

  association [0..1] to I_BillingBlockReason          as _HeaderBillingBlockReason
    on $projection.HeaderBillingBlockReason = _HeaderBillingBlockReason.BillingBlockReason

  association [0..1] to I_DistributionChannel         as _DistributionChannel
    on $projection.DistributionChannel = _DistributionChannel.DistributionChannel

  association [0..1] to I_Division                    as _Division
    on $projection.Division = _Division.Division

  association [0..1] to I_ShippingPoint               as _ShippingPoint
    on $projection.ShippingPoint = _ShippingPoint.ShippingPoint

  association [0..1] to I_OverallProofOfDelivStatus   as _OverallProofOfDelivStatus
    on $projection.OverallProofOfDeliveryStatus = _OverallProofOfDelivStatus.OverallProofOfDeliveryStatus

  association [0..1] to I_Currency                    as _TransactionCurrency
    on $projection.TransactionCurrency = _TransactionCurrency.Currency

  association [0..1] to I_ServiceDocumentEnhcd        as _BusinessSolutionOrder
    on  $projection.BusinessSolutionOrder        = _BusinessSolutionOrder.ServiceDocument
    and _BusinessSolutionOrder.ServiceObjectType = 'BUS2000172'

  association [0..*] to I_ShippingPointText           as _ShippingPointText
    on $projection.ShippingPoint = _ShippingPointText.ShippingPoint

  association [0..*] to I_BillingDocumentCategoryText as _BillingDocumentCategoryText
    on $projection.BillingDocumentCategory = _BillingDocumentCategoryText.BillingDocumentCategory

  association [0..*] to I_BillingDocumentTypeText_2   as _BillingDocumentTypeText
    on $projection.BillingDocumentType = _BillingDocumentTypeText.BillingDocumentType

  association [0..*] to I_SalesOrganizationText       as _SalesOrganizationText
    on $projection.SalesOrganization = _SalesOrganizationText.SalesOrganization

  association [0..*] to I_CountryText                 as _DestinationCountryText
    on $projection.DestinationCountry = _DestinationCountryText.Country

  association [0..*] to I_SDDocumentCategoryText      as _RefSDDocumentCategoryText
    on $projection.ReferenceSDDocumentCategory = _RefSDDocumentCategoryText.SDDocumentCategory

  association [0..*] to I_SDDocumentTypeText          as _ReferenceSDDocumentTypeText
    on  $projection.ReferenceSDDocumentType     = _ReferenceSDDocumentTypeText.SDDocumentType
    and $projection.ReferenceSDDocumentCategory = _ReferenceSDDocumentTypeText.SDDocumentCategory

  association [0..*] to I_BillingBlockReasonText      as _HeaderBillingBlockReasonText
    on $projection.HeaderBillingBlockReason = _HeaderBillingBlockReasonText.BillingBlockReason

  association [0..*] to I_DistributionChannelText     as _DistributionChannelText
    on $projection.DistributionChannel = _DistributionChannelText.DistributionChannel

  association [0..*] to I_DivisionText                as _DivisionText
    on $projection.Division = _DivisionText.Division

  association [0..*] to I_OverallProofOfDelivStatusT  as _OverallProofOfDelivStatusText
    on $projection.OverallProofOfDeliveryStatus = _OverallProofOfDelivStatusText.OverallProofOfDeliveryStatus

  association [0..*] to I_CurrencyText                as _TransactionCurrencyText
    on $projection.TransactionCurrency = _TransactionCurrencyText.Currency

{
      // Key
      @ObjectModel.foreignKey.association: '_BillingDocumentCategory'
  key fktyp                                as BillingDocumentCategory,

      @ObjectModel.foreignKey.association: '_BillingDocumentType'
  key fkart                                as BillingDocumentType,

  key fkdat                                as BillingDocumentDate,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
  key vkorg                                as SalesOrganization,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      @ObjectModel.foreignKey.association: '_Customer'
  key cast(kunnr as kunnr preserving type) as Customer,


      @ObjectModel.foreignKey.association: '_DestinationCountry'
  key lland                                as DestinationCountry,

  key vbeln                                as ReferenceSDDocument,

      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      vbtyp                                as ReferenceSDDocumentCategory,

      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentType'
      vbart                                as ReferenceSDDocumentType,

      // Sales Distribution
      // TODO FK (addressed to Toralf)
      cast(adrnr as adrnr preserving type) as AddressID,
      // TODO FK (addressed to Toralf)      
      adrnp                                as AddressPersonID,
      // TODO FK (addressed to Toralf)      
      addr_type                            as AddressObjectType,

      @ObjectModel.foreignKey.association: '_HeaderBillingBlockReason'
      faksk                                as HeaderBillingBlockReason,

      // User
      sortkri                              as SortCriterion,

      // Org
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      vtweg                                as DistributionChannel,

      @ObjectModel.foreignKey.association: '_Division'
      spart                                as Division,

      // Delivery
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ShippingPointStdVH', element: 'ShippingPoint' } } ]
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      @ObjectModel.text.association: '_ShippingPointText'
      vstel                                as ShippingPoint,

      @ObjectModel.foreignKey.association: '_OverallProofOfDelivStatus'
      pdstk                                as OverallProofOfDeliveryStatus,

      // Pricing
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      netwr                                as NetAmount,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode: true
      waerk                                as TransactionCurrency,

      bdr_ref_logsys                       as BillgDocReqRefLgclSyst,
      bdr_ref                              as BillingDocRequestReference,

      //      TODO VH (not C1 released): Addressed to Bhanu
//      @Consumption.valueHelpDefinition: [
//      { entity:  { name:    'I_BusinessSolutionOrderStdVH',
//                     element: 'BusinessSolutionOrder' }
//        }]
      @ObjectModel.foreignKey.association: '_BusinessSolutionOrder'
      solution_order_id                    as BusinessSolutionOrder,

      @Semantics.user.createdBy: true
      ernam                                as CreatedByUser,

      @Semantics.systemDate.createdAt: true
      erdat                                as CreationDate,

      @Semantics.systemTime.createdAt
      erzet                                as CreationTime,

      // Expose associations
      _BillingDocumentCategory,
      _BillingDocumentType,
      _ReferenceSDDocumentCategory,
      _ReferenceSDDocumentType,
      _SalesOrganization,
      _Customer,
      _DestinationCountry,
      _DfltAddrRprstn,
      _HeaderBillingBlockReason,
      _DistributionChannel,
      _Division,
      _ShippingPoint,
      _OverallProofOfDelivStatus,
      _TransactionCurrency,
      _BusinessSolutionOrder,

      @Consumption.hidden: true
      _ShippingPointText,

      _BillingDocumentCategoryText,
      _BillingDocumentTypeText,
      _SalesOrganizationText,
      _DestinationCountryText,
      _RefSDDocumentCategoryText,
      _ReferenceSDDocumentTypeText,
      _HeaderBillingBlockReasonText,
      _DistributionChannelText,
      _DivisionText,
      _OverallProofOfDelivStatusText,
      _TransactionCurrencyText
}
```
