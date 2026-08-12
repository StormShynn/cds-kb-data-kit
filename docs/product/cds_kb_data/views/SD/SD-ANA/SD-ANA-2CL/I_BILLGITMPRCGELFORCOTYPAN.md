---
name: I_BILLGITMPRCGELFORCOTYPAN
description: "Billgitmprcgelforcotypan"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - interface-view
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# I_BILLGITMPRCGELFORCOTYPAN

**Billgitmprcgelforcotypan**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocument` | ✓ | |  |  |  |  |
| `BillingDocumentItem` | ✓ | |  | `cast(BDI.BillingDocumentItem as billing_document_item)` |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionCategory` |  | |  |  |  |  |
| `ConditionClass` |  | |  |  |  |  |
| `ConditionIsForStatistics` |  | |  |  |  |  |
| `ConditionControl` |  | |  |  |  |  |
| `ConditionInactiveReason` |  | |  |  |  |  |
| `ReturnItemProcessingType` |  | |  | `cast(BDI.ReturnItemProcessingType as return_id_processing_type)` |  |  |
| `SalesDocumentItemCategory` |  | |  | `cast(BDI.SalesDocumentItemCategory as sales_document_item_category preserving type )` |  |  |
| `SalesDocumentItemType` |  | |  | `cast(BDI.SalesDocumentItemType as sales_document_item_type preserving type )` |  |  |
| `BillingDocumentCategory` |  | |  |  |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `PricingDateTime` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  | `cast(BDI.OrganizationDivision as organization_division preserving type)` |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `ConditionRecord` |  | |  |  |  |  |
| `ConditionSequentialNumber` |  | |  |  |  |  |
| `ConditionOrigin` |  | |  |  |  |  |
| `ConditionIsManuallyChanged` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionBaseQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionCalculationType` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ConditionAmount` |  | |  | `cast(PRCEL.ConditionAmount as cond_amount)` |  |  |
| `NormalizedConditionAmount` |  | |  | `cast( case when ( BDI.SDDocumentCategory = 'M' or BDI.SDDocumentCategory = 'P' or BDI.SDDocumentCategory = '5' ) then ConditionAmount else case when ( BDI.SDDocumentCategory = 'O' or BDI.SDDocumentCategory = '6' ) then -1 * PRCEL.ConditionAmount end end as nrmlzd_cond_amount )` |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@EndUserText.label: 'Billing Document Item Pricing Element Analytics'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
---@AccessControl.privilegedAssociations: [ '_CreatedByUser' ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AbapCatalog.sqlViewName: 'ISDBDIPEFCOTYA'
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.internalName:#LOCAL
@ObjectModel.modelingPattern: #NONE 
@ObjectModel.supportedCapabilities:  [ #CDS_MODELING_DATA_SOURCE ]


/////////////////////////////////////////////////////////////////////////
// IMPORTANT NOTE  (AT Jan.2020)                                       //
//                                                                     //
// This model exposes measures based on high-data-volume entities.     //
//                                                                     //
// To achieve an acceptable performance, please consider to use        //
// this model "as restricted" as possible:                             //
// - use only the minimal viable set of dimensions and KPIs            //
// - consider using filters, like ConditionType, SalesOrganization,    //
//   Product(/Group),BillingDocumentDate, PricingDateTime, etc..,      //
//   that allow  a good focus on the relevant data                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////

--Note: AT25.11.2020: for CE2102 profit from vbrp-knumv_ana to get rid of cyclic join in hana processing !                                                            
--                    changes: 1.joining 2. no longer usage of BillingDocument in {}


define view I_BillgItmPrcgElForCoTypAn 
 with parameters
       P_ConditionType          : conditiontype,
       P_BillingDocumentDate    : startofquarter

as select from   I_PricingElement          as PRCEL
   inner join    I_BillingDocumentItem      as BDI            on   PRCEL.PricingDocument     = BDI.PricingDocument
                                                             and  PRCEL.PricingDocumentItem =  BDI.BillingDocumentItem

//as select from   I_PricingElement          as PRCEL
//   inner join    I_BillingDocumentBasic    as BD             on   PRCEL.PricingDocument     = BD.PricingDocument     
//                                                             and  PRCEL.PricingDocumentItem != '000000'
//   inner join    I_BillingDocExtdItem      as BDI            on   BD.BillingDocument    = BDI.BillingDocument
//                                                             and  PRCEL.PricingDocumentItem =  BDI.BillingDocumentItem
//                                                             and  BD.BillingDocumentDate = BDI.BillingDocumentDate

{
   //Key
     @ObjectModel.foreignKey.association: '_BillingDocument'  
key  BDI.BillingDocument,
//     @ObjectModel.foreignKey.association: '_Item'
key  cast(BDI.BillingDocumentItem as billing_document_item) as BillingDocumentItem,
key  PRCEL.PricingProcedureStep,
key  PRCEL.PricingProcedureCounter,

   //Category
     @ObjectModel.foreignKey.association: '_ConditionApplication'
     PRCEL.ConditionApplication, 
     @ObjectModel.foreignKey.association: '_PricingConditionType'
     PRCEL.ConditionType,
     @ObjectModel.foreignKey.association: '_ConditionCategory'
     PRCEL.ConditionCategory,
     @ObjectModel.foreignKey.association: '_ConditionClass'
     PRCEL.ConditionClass, 
     PRCEL.ConditionIsForStatistics,
     @ObjectModel.foreignKey.association: '_ConditionControl'
     PRCEL.ConditionControl,    
     @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
     PRCEL.ConditionInactiveReason,
       
     -- verified with Pricing Architect Ursula Becker
     -- !! PRCEL.PricingScaleType,           <-exclude! 
     -- !! PRCEL.IsRelevantForAccrual,         <-exclude!
     -- !! PRCEL.CndnIsRelevantForInvoiceList,  <-exclude!
     -- !! PRCEL.IsGroupCondition,   <-exclude!
     -- !! PRCEL.TaxCode,              <-exclude!
     -- !! PRCEL.WithholdingTaxCode,   <-exclude! 
     -- !! @DefaultAggregation:#NONE
     -- !! @Semantics.amount.currencyCode: 'TransactionCurrency'
     -- !! PRCEL.CndnRoundingOffDiffAmount,   <-exclude!
    
     -- !! PRCEL.PrcgProcedureCounterForHeader,
     -- !! PRCEL.FactorForConditionBasisValue,
     -- !! @ObjectModel.foreignKey.association: '_StructureCondition'
     -- !! PRCEL.StructureCondition,
     -- !! PRCEL.PeriodFactorForCndnBasisValue,
     -- !! @ObjectModel.foreignKey.association: '_PricingScaleBasis'
     -- !! PRCEL.PricingScaleBasis,    
     -- !! PRCEL.ConditionScaleBasisValue,
     -- !! @Semantics.unitOfMeasure: true
     -- !! @ObjectModel.foreignKey.association: '_ScaleUnitOfMeasure'
     -- !! PRCEL.ConditionScaleBasisUnit,
     -- !! @Semantics.currencyCode: true
     -- !! @ObjectModel.foreignKey.association: '_ScaleCurrency'
     -- !! PRCEL.ConditionScaleBasisCurrency,
     -- !! PRCEL.CndnIsRelevantForIntcoBilling,
     -- !! PRCEL.ConditionIsForConfiguration,
     -- !! PRCEL.VariantCondition,
    
     cast(BDI.ReturnItemProcessingType as return_id_processing_type)                         as         ReturnItemProcessingType,
     @ObjectModel.foreignKey.association: '_SalesDocumentItemCategory'
     cast(BDI.SalesDocumentItemCategory as sales_document_item_category preserving type )    as         SalesDocumentItemCategory,
     @ObjectModel.foreignKey.association: '_SalesDocumentItemType'
     cast(BDI.SalesDocumentItemType as sales_document_item_type preserving type )            as         SalesDocumentItemType,
     
     -- reporting relevant item dimensions of section //Category to be completed (see BillingDocItemCube for reference)
     
     @ObjectModel.foreignKey.association: '_BillingDocumentCategory'
     BDI.BillingDocumentCategory, 
     @ObjectModel.foreignKey.association: '_SDDocumentCategory'
     BDI.SDDocumentCategory,
     @ObjectModel.foreignKey.association: '_BillingDocumentType'
     BDI.BillingDocumentType,
     
     -- reporting relevant header dimensions of section //Category to be completed (see BillingDocItemCube for reference)
     
   //Admin
     PRCEL.PricingDateTime,  
     BDI.BillingDocumentDate,
     
   // Organization
     @ObjectModel.foreignKey.association: '_SalesOrganization'
     BDI.SalesOrganization,
     @ObjectModel.foreignKey.association: '_DistributionChannel'
     BDI.DistributionChannel,
     @ObjectModel.foreignKey.association: '_OrganizationDivision'
     cast(BDI.OrganizationDivision as organization_division preserving type)  as         OrganizationDivision,
     @ObjectModel.foreignKey.association: '_Division'
     BDI.Division,
     
     
     @ObjectModel.foreignKey.association: '_SalesOffice'
     BDI.SalesOffice,
     
   //Product
     @ObjectModel.foreignKey.association: '_Product' 
     BDI.Product,   
     @ObjectModel.foreignKey.association: '_ProductGroup' 
     BDI.ProductGroup,     
     
   //Pricing  
     PRCEL.ConditionRecord,
     PRCEL.ConditionSequentialNumber,
     @ObjectModel.foreignKey.association: '_ConditionOrigin'
     PRCEL.ConditionOrigin,
     PRCEL.ConditionIsManuallyChanged, 
     

//     @ObjectModel.foreignKey.association: '_ConditionCurrency'
//     PRCEL.ConditionCurrency,
     @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
     PRCEL.ConditionQuantity,

--     PRCEL.ConditionRateValue,  AT26.2.2020: ignore ConditionRateValue and also "descendant"     
     -- ConditionRateValue is splitted into:
     --     ConditionRateAmount
     --     ConditionRateRatio
     --     ConditionRateRatioUnit

     --PRCEL.ConditionBaseValue,    -- AT26.2.2020: one "descendant" ConditionBaseQuantity needed for Chemours Requirement (ConditionType specific quantity for price)
     -- ConditionBaseValue is splitted into:
     --     ConditionBaseAmount
     --     ConditionRateAmount
     --     ConditionBaseQuantity
     @Aggregation.default: #SUM
     @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
     PRCEL.ConditionBaseQuantity,
     @Semantics.unitOfMeasure: true
     @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
     PRCEL.ConditionQuantityUnit,
//     @Semantics.amount.currencyCode: 'TransactionCurrency' --ConditionCurrency(Waers) or TransactionCurrency(waerk) ask pricing experts ?? 
//     @OData.v2.amount.noDecimalShift: true
//     PRCEL.ConditionBaseAmount,  --AT26.2.2020: attention currency conversion only supports CURR !! 
          
     @ObjectModel.foreignKey.association: '_ConditionCalculationType'
     PRCEL.ConditionCalculationType,
        
     @ObjectModel.foreignKey.association: '_Currency'
     PRCEL.TransactionCurrency,
     @Aggregation.default: #SUM
     @Semantics.amount.currencyCode: 'TransactionCurrency'
     cast(PRCEL.ConditionAmount as cond_amount) as ConditionAmount,

     @Aggregation.default: #SUM
     @Semantics.amount.currencyCode: 'TransactionCurrency'
    cast( case when     ( BDI.SDDocumentCategory = 'M'
                    or    BDI.SDDocumentCategory = 'P' 
                    or    BDI.SDDocumentCategory = '5' )
               then ConditionAmount
          else 
               case when    ( BDI.SDDocumentCategory = 'O'  
                         or   BDI.SDDocumentCategory = '6' ) 
                    then  -1 * PRCEL.ConditionAmount             -- sign correction, for credit items in debit documents and debit items in credit documents
                  --else 0
               end
      end as   nrmlzd_cond_amount )
     as NormalizedConditionAmount,  
     
// only for testing
//    $parameters.P_BillingDocumentDate as StartQuarter,
//    dats_add_months( $parameters.P_BillingDocumentDate, 3 , 'FAIL' ) as EndQuarter,
//   DATS_ADD_DAYS( dats_add_months( $parameters.P_BillingDocumentDate, 3 , 'FAIL' ) ,-1, 'FAIL') as EndQuarter,  --Note: this is not used below in the filter part, instead '<' is used !
     
     
   //Associations
     BDI._BillingDocument,
     BDI._BillingDocumentCategory,
     BDI._SDDocumentCategory,
     BDI._BillingDocumentType,
     BDI._SalesDocumentItemCategory,
     BDI._SalesDocumentItemType,
     BDI._SalesOrganization,
     BDI._DistributionChannel,
     BDI._OrganizationDivision,
     BDI._Division,
     BDI._SalesOffice, 
     BDI._Product,
     BDI._ProductGroup,
     PRCEL._ConditionApplication,
     PRCEL._PricingConditionType,
     PRCEL._ConditionCategory,
     PRCEL._ConditionClass,
     PRCEL._ConditionCalculationType,
     PRCEL._ConditionOrigin,
     PRCEL._ConditionControl,
     PRCEL._ConditionInactiveReason,
//     _ConditionCurrency,
     PRCEL._ConditionQuantityUnit,
     PRCEL._Currency  
       
}
where
     BDI.StatisticalValueControl    = ''        -- exclude, only those end in FI
 and BDI.OverallBillingStatus != 'C'             -- exclude pricing elements from cancelled billing documents (here status 'C' is cancelled!)
 and BDI.BillingDocumentIsTemporary = ''         -- exclude pricing elements from temporary billing documents 
 and BDI.BillingDocumentCategory   != 'P'        -- exclude pricing elements from down payment requests
 and (
     BDI.SDDocumentCategory = 'M' // Invoice
//or BD.SDDocumentCategory = 'N' // Invoice Cancelation      (exclude, embedded analytics blind for cancelled info !)
  or BDI.SDDocumentCategory = 'O' // Credit Memo
  or BDI.SDDocumentCategory = 'P' // Debit Memo
//or BD.SDDocumentCategory = 'S' // Credit Memo Cancelation  (exclude, embedded analytics blind for cancelled info !)
//or BD.SDDocumentCategory = 'U' // Pro Forma Invoice        (exclude, only "pro forma")
  or BDI.SDDocumentCategory = '5' // Intercompany Invoice
  or BDI.SDDocumentCategory = '6' // Intercompany Credit Memo
    )
    
// Here: Turning the mandatory parameter into filter criteria
// Please note, that the '<' is chosen to really have one quarter, e.g. 1.1.2020 to 31.3.2020, because the dats_add_months function returns 1.4.2020    
  and PRCEL.ConditionType = $parameters.P_ConditionType
  and BDI.BillingDocumentDate >= $parameters.P_BillingDocumentDate and BDI.BillingDocumentDate <  dats_add_months( $parameters.P_BillingDocumentDate, 3 , 'FAIL' )
```
