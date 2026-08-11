---
name: I_BUSINESSPARTNERSUPPLIERDEX
description: "Data Extraction for BP Supplier"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERSUPPLIERDEX')/$value
semantic_en: "Data Extraction for BP Supplier"
semantic_vi: "Data Extraction for BP Supplier — CDS view giao diện dựa trên I_Supplier."
keywords:
  - "data"
  - "extraction"
  - "for"
  - "supplier"
  - "business"
  - "partner"
  - "category"
  - "account"
  - "group"
tags:
  - LO
  - bo:businesspartner
  - component:LO-MD-BP-2CL
  - interface-view
  - LO-MD
  - LO-MD-BP
  - LO-MD-BP-2CL
  - lob:logistics general
  - supplier
---
# I_BUSINESSPARTNERSUPPLIERDEX

**Data Extraction for BP Supplier**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERSUPPLIERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `BusinessPartnerUUID` |  | |  | `partner_guid` | `RAW(16)` | Business Partner GUID |
| `BusinessPartnerCategory` |  | |  | `type` | `CHAR(1)` | Business Partner Category |
| `SupplierAccountGroup` |  | |  |  | `CHAR(4)` | Supplier Account Group |
| `TitleSupplier` |  | |  | `FormOfAddress` | `CHAR(15)` | Title |
| `InternationalLocationNumber1` |  | |  |  | `NUMC(7)` | International location number  (part 1) |
| `InternationalLocationNumber2` |  | |  |  | `NUMC(5)` | International location number (Part 2) |
| `InternationalLocationNumber3` |  | |  |  | `NUMC(1)` | Check digit for the international location number |
| `ReferenceAccountGroup` |  | |  |  | `CHAR(4)` | Reference Account Group for One-Time Account (Vendor) |
| `SupplierAlternativePayee` |  | |  | `AlternativePayeeAccountNumber` | `CHAR(10)` | Account Number of the Alternative Payee |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `PostingIsBlocked` |  | |  |  | `CHAR(1)` | Central Posting Block |
| `PurchasingIsBlocked` |  | |  |  | `CHAR(1)` | Centrally imposed purchasing block |
| `VATLiability` |  | |  |  | `CHAR(1)` | Liable for VAT |
| `PaymentIsBlockedForSupplier` |  | |  |  | `CHAR(1)` | Payment Block |
| `SuplrProofOfDelivRlvtCode` |  | |  |  | `CHAR(1)` | Supplier indicator relevant for proof of delivery |
| `BR_TaxIsSplit` |  | |  |  | `CHAR(1)` | Tax Split |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` | `CHAR(1)` | Draft - Indicator - Is active document |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `IsToBeAcceptedAtOrigin` |  | |  |  | `CHAR(1)` | Acceptance At Origin |
| `SupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Group Key |
| `ResponsibleType` |  | |  |  | `CHAR(2)` | Tax Type |
| `FiscalAddress` |  | |  |  | `CHAR(10)` | Account number of the master record with fiscal address |
| `SupplierProcurementBlock` |  | |  |  | `CHAR(2)` | Function That Will Be Blocked |
| `DataExchangeInstructionKey` |  | |  |  | `CHAR(2)` | Instruction Key for Data Medium Exchange |
| `BPIsEqualizationTaxSubject` |  | |  |  | `CHAR(1)` | Checkbox |
| `BRSpcfcTaxBasePercentageCode` |  | |  |  | `NUMC(1)` | Tax Base in Percentage |
| `DataMediumExchangeIndicator` |  | |  |  | `CHAR(1)` | Recipient Code for Data Medium Exchange |
| `TranspServiceAgentStstcGrp` |  | |  |  | `CHAR(2)` | Shipment: statistics group, transportation service agent |
| `TaxNumberResponsible` |  | |  |  | `CHAR(18)` | Tax Number at Responsible Tax Authority |
| `TaxNumberType` |  | |  |  | `CHAR(2)` | Tax Number Type |
| `SuplrQualityManagementSystem` |  | |  |  | `CHAR(4)` | Actual QM System of Supplier |
| `SuplrQltyInProcmtCertfnValidTo` |  | |  |  | `DATS(8)` | Validity Date of Certification |
| `SupplierIsSubRangeRelevant` |  | |  |  | `CHAR(1)` | Indicator: vendor sub-range relevant |
| `TrainStationName` |  | |  |  | `CHAR(25)` | Train station |
| `AlternativePayeeIsAllowed` |  | |  |  | `CHAR(1)` | Indicator: Alternative Payee in Document Allowed? |
| `PaytSlipWthRefSubscriber` |  | |  |  | `CHAR(11)` | ISR Subscriber Number |
| `SupplierIsPlantRelevant` |  | |  |  | `CHAR(1)` | Indicator: plant level relevant |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Factory calendar key |
| `SupplierPlant` |  | |  |  | `CHAR(4)` | Plant (Own or External) |
| `DeletionIndicator` |  | |  |  | `CHAR(1)` | Central Deletion Flag for Master Record |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `PaymentReason` |  | |  |  | `CHAR(4)` | Payment Reason |
| `SupplierCentralDeletionIsBlock` |  | |  |  | `CHAR(1)` | Central deletion block for master record |
| `DataControllerSet` |  | |  |  | `CHAR(1)` | BP: Data Controller Set Flag |
| `DataController1` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController2` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController3` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController4` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController5` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController6` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController7` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController8` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController9` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController10` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `IsOneTimeAccount` |  | |  |  | `CHAR(1)` | Indicator: Is the Account a One-Time Account? |
| `BusinessPartnerPanNumber` |  | |  |  | `CHAR(40)` | Permanent Account Number |
| `_SupplierToBusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierToBusinessPartner` | `I_Supplier_to_BusinessPartner` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERSUPPLIERDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERSUPPLIERDEX')/$value)*

```abap
@Analytics.technicalName: 'IBPSUPPLIERDEX'
@Analytics.internalName: #LOCAL
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'BusinessPartner'
@ObjectModel.sapObjectNodeType.name: 'Supplier'
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: ['IsBusinessPurposeCompleted']
@EndUserText.label: 'Data Extraction for BP Supplier'
@Analytics: {
  dataCategory: #DIMENSION, 
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
       mapping:[
             
                {
                   table: 'BUT000' , role: #MAIN,
                   viewElement: ['BusinessPartner'],
                    tableElement: ['partner']
                },
                 {
                   table: 'CVI_VEND_LINK', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BusinessPartnerUUID'],
                    tableElement: ['partner_guid']
                },
                {
                   table: 'LFA1', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['Supplier'],
                    tableElement: ['lifnr']
                }
                
      ]
    }
  }
}
@Metadata.allowExtensions: true
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION]
 @Consumption.dbHints: [ 'USE_HEX_PLAN' ]
 
define view entity I_BusinessPartnerSupplierDEX 
as select from  I_Supplier as Supplier
    inner join      cvi_vend_link on Supplier.Supplier = cvi_vend_link.vendor
    left outer to one join but000        on cvi_vend_link.partner_guid = but000.partner_guid
    
    association [1..1] to I_Supplier_to_BusinessPartner as _SupplierToBusinessPartner on $projection.Supplier = _SupplierToBusinessPartner.Supplier
{
  key but000.partner                                  as BusinessPartner,
      Supplier.Supplier,
      cvi_vend_link.partner_guid                      as BusinessPartnerUUID,
      but000.type                                     as BusinessPartnerCategory,
      Supplier.SupplierAccountGroup,
      Supplier.FormOfAddress as TitleSupplier,
      Supplier.InternationalLocationNumber1,
      Supplier.InternationalLocationNumber2,
      Supplier.InternationalLocationNumber3,      
      Supplier.ReferenceAccountGroup,      
      Supplier.AlternativePayeeAccountNumber          as SupplierAlternativePayee,
      Supplier.Customer,
      Supplier.PostingIsBlocked,
      Supplier.PurchasingIsBlocked,
      Supplier.VATLiability,
      Supplier.PaymentIsBlockedForSupplier,
      Supplier.SuplrProofOfDelivRlvtCode,
      Supplier.BR_TaxIsSplit,
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity,
      Supplier.AuthorizationGroup,
      Supplier.IsToBeAcceptedAtOrigin,
      Supplier.SupplierCorporateGroup,
      Supplier.ResponsibleType, 
      Supplier.FiscalAddress,
      Supplier.SupplierProcurementBlock,
      Supplier.DataExchangeInstructionKey,
      Supplier.BPIsEqualizationTaxSubject,
      Supplier.BRSpcfcTaxBasePercentageCode,
      Supplier.DataMediumExchangeIndicator,
      Supplier.TranspServiceAgentStstcGrp,
      Supplier.TaxNumberResponsible,
      Supplier.TaxNumberType,
      Supplier.SuplrQualityManagementSystem,
      Supplier.SuplrQltyInProcmtCertfnValidTo,
      Supplier.SupplierIsSubRangeRelevant,
      Supplier.TrainStationName,
      Supplier.AlternativePayeeIsAllowed,
      Supplier.PaytSlipWthRefSubscriber,
      Supplier.SupplierIsPlantRelevant,
      Supplier.FactoryCalendar,
      Supplier.SupplierPlant,
      Supplier.DeletionIndicator,
      @Semantics.booleanIndicator: true
      Supplier.IsBusinessPurposeCompleted,
      Supplier.PaymentReason,
      Supplier.SupplierCentralDeletionIsBlock,      
      //added only for DCL check
      @Consumption.hidden:true     
      Supplier.DataControllerSet,
      @Consumption.hidden:true      
      Supplier.DataController1,
      //added only for DCL check
      @Consumption.hidden:true      
      Supplier.DataController2,
      //added only for DCL check
      @Consumption.hidden:true     
      Supplier.DataController3,
      //added only for DCL check
      @Consumption.hidden:true     
      Supplier.DataController4,
      //added only for DCL check
      @Consumption.hidden:true      
      Supplier.DataController5,
      @Consumption.hidden:true      
      Supplier.DataController6,
      //added only for DCL check
      @Consumption.hidden:true      
      Supplier.DataController7,
      //added only for DCL check
      @Consumption.hidden:true      
      Supplier.DataController8,
      //added only for DCL check
      @Consumption.hidden:true      
      Supplier.DataController9,
      //added only for DCL check
      @Consumption.hidden:true      
      Supplier.DataController10,
      Supplier.IsOneTimeAccount,
      Supplier.BusinessPartnerPanNumber,
      _SupplierToBusinessPartner
  
}
```
