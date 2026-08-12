---
name: I_SUPPLIERPURCHASINGORG
description: "Supplierpurchasingorg"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - supplier
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
---
# I_SUPPLIERPURCHASINGORG

**Supplierpurchasingorg**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  | `lifnr` |  |  |
| `PurchasingOrganization` | ✓ | |  | `ekorg` |  |  |
| `PurchasingGroup` |  | |  | `ekgrp` |  |  |
| `MaterialPlannedDeliveryDurn` |  | |  | `plifz` |  |  |
| `PurchasingIsBlockedForSupplier` |  | |  | `sperm` |  |  |
| `SupplierRespSalesPersonName` |  | |  | `verkf` |  |  |
| `SupplierPhoneNumber` |  | |  | `telf1` |  |  |
| `PurchaseOrderCurrency` |  | |  | `waers` |  |  |
| `MinimumOrderAmount` |  | |  | `minbw` |  |  |
| `CalculationSchemaGroupCode` |  | |  | `kalsk` |  |  |
| `PaymentTerms` |  | |  | `zterm` |  |  |
| `PricingDateControl` |  | |  | `meprf` |  |  |
| `SupplierABCClassificationCode` |  | |  | `lfabc` |  |  |
| `ShippingCondition` |  | |  | `vsbed` |  |  |
| `PurOrdAutoGenerationIsAllowed` |  | |  | `kzaut` |  |  |
| `InvoiceIsGoodsReceiptBased` |  | |  | `webre` |  |  |
| `IncotermsClassification` |  | |  | `inco1` |  |  |
| `IncotermsTransferLocation` |  | |  | `inco2` |  |  |
| `IncotermsVersion` |  | |  | `incov` |  |  |
| `IncotermsLocation1` |  | |  | `inco2_l` |  |  |
| `IncotermsLocation2` |  | |  | `inco3_l` |  |  |
| `DeletionIndicator` |  | |  | `loevm` |  |  |
| `PlannedDeliveryDurationInDays` |  | |  | `plifz` |  |  |
| `ContactPersonPhoneNumber` |  | |  | `telf1` |  |  |
| `SupplierConfirmationControlKey` |  | |  | `bstae` |  |  |
| `IsOrderAcknRqd` |  | |  | `kzabs` |  |  |
| `EvaldReceiptSettlementIsActive` |  | |  | `xersy` |  |  |
| `AutomaticEvaluatedRcptSettlmt` |  | |  | `xersr` |  |  |
| `SupplierAccountNumber` |  | |  | `eikto` |  |  |
| `SuplrIsSubjToSubsqntSettlement` |  | |  | `bolre` |  |  |
| `SuplrPurgOrgAgrmtOfBusVolIsRqd` |  | |  | `umsae` |  |  |
| `SuplrInvcRevalIsAllowed` |  | |  | `xnbwy` |  |  |
| `SuplrPurgOrgIsRlvtForPriceDetn` |  | |  | `prfre` |  |  |
| `IntrastatCrsBorderTrMode` |  | |  | `expvz` |  |  |
| `ProductUnitGroup` |  | |  | `megru` |  |  |
| `RoundingProfile` |  | |  | `rdprf` |  |  |
| `PlanningCycle` |  | |  | `lfrhy` |  |  |
| `SuplrDiscountInKindIsGranted` |  | |  | `cast ( nrgew as xfeld preserving type )` |  |  |
| `SuplrIsRlvtForSettlmtMgmt` |  | |  | `agrel` |  |  |
| `InvoiceIsMMServiceEntryBased` |  | |  | `lebre` |  |  |
| `ProdStockAndSlsDataTransfPrfl` |  | |  | `paprf` |  |  |
| `EvaldRcptSettlementProfile` |  | |  | `valid_pro` |  |  |
| `AbsoluteHandlingSurchargeAmt` |  | |  | `hscabs` |  |  |
| `PercentageHandlingSurchargeAmt` |  | |  | `hscpe` |  |  |
| `MinimumHandlingSurchargeAmt` |  | |  | `hscmin` |  |  |
| `MaximumHandlingSurchargeAmt` |  | |  | `hscmax` |  |  |
| `AutomDebitCrtnIsEnbldOnGI` |  | |  | `aubel` |  |  |
| `SupplierIsReturnsSupplier` |  | |  | `kzret` |  |  |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |  |  |
| `IncotermsSupChnLoc1AddlUUID` |  | |  | `cast( inco2_key as /sapapo/location_uuid)` |  |  |
| `IncotermsSupChnLoc2AddlUUID` |  | |  | `cast( inco3_key as /sapapo/location_uuid)` |  |  |
| `IncotermsSupChnDvtgLocAddlUUID` |  | |  | `cast( inco4_key as /sapapo/location_uuid)` |  |  |
| `AuthorizationGroup` |  | | `_Supplier` | `AuthorizationGroup` |  |  |
| `_IncotermsClassification` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IncotermsClassification` | `I_IncotermsClassification` | [0..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_PurgOrgExt` | `E_BPPURORG_D` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPPLPURCH' //must start with "I"

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: ['IsBusinessPurposeCompleted']
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
         mapping:[
                {
                    table: 'LFM1', role: #MAIN,
                    viewElement: ['Supplier','PurchasingOrganization'],
                    tableElement: ['lifnr','ekorg']
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

@ClientHandling.algorithm : #SESSION_VARIABLE

@EndUserText.label: 'Supplier Purchasing Organization' //same as DDL description

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'PurchasingOrganization'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'SupplierPurchasingOrganization'
@VDM.viewType: #BASIC
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_SupplierPurchasingOrg //must start with "I_"; same as DDL source name in upper-camelcase notation
  as select from lfm1
  //Directly Selecting fields from Table instead of V_MD_SUPPLIER_PURCHASING view
  //---> Decomment if you want to join further data sources
  //left outer to one join DatabaseTableOrBasicCdsView2 //recommendation: use addition "to one" or "to many"
  //   on V_MD_SUPPLIER_PURCHASING.FieldName = DatabaseTableOrBasicCdsView2.FieldName2
  //---> Decomment if you want to introduce an association
  //association [0..1] to I_TargetPublicBasicViewNameWithoutPrefix as _TargetPublicBasicViewNameWithoutPrefix
  //   on $projection.SourceFieldName = _TargetPublicBasicViewNameWithoutPrefix.TargetFieldName
  association [0..1] to I_IncotermsClassification as _IncotermsClassification on  $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification

  association [1..1] to I_Supplier                as _Supplier                on  $projection.Supplier = _Supplier.Supplier

  association [0..1] to E_BPPURORG_D              as _PurgOrgExt              on  $projection.PurchasingOrganization = _PurgOrgExt.PurchasingOrganization
                                                                              and $projection.Supplier               = _PurgOrgExt.Supplier

{
      //key cast (DatabaseFieldName as DataElementWithProperLabel) as GlobalFieldName,
      //--[ GENERATED:012:GlBfhyJl7kY4i6}7dD1KRG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Supplier_VH',
                     element: 'Supplier' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Supplier'
  key lifnr                                           as Supplier,
      // @ObjectModel.text.element: 'PurchasingOrganizationName'
  key ekorg                                           as PurchasingOrganization,
      //    SupplierName1,
      //    SupplierName2,
      //    PurchasingGroupName,
      // PurchasingOrganizationName, Commented as a part of whitelisting development
      //    PurchasingBlock,
      //    SupplierRespSalesPersonName,
      //    SupplierPhoneNumber,
      ekgrp                                           as PurchasingGroup,
      plifz                                           as MaterialPlannedDeliveryDurn,
      sperm                                           as PurchasingIsBlockedForSupplier,
      verkf                                           as SupplierRespSalesPersonName,
      telf1                                           as SupplierPhoneNumber,
      waers                                           as PurchaseOrderCurrency,
      @Semantics.amount.currencyCode: 'PurchaseOrderCurrency'
      minbw                                           as MinimumOrderAmount,
      kalsk                                           as CalculationSchemaGroupCode,
      zterm                                           as PaymentTerms,
      meprf                                           as PricingDateControl,
      lfabc                                           as SupplierABCClassificationCode,
      vsbed                                           as ShippingCondition,
      kzaut                                           as PurOrdAutoGenerationIsAllowed,
      webre                                           as InvoiceIsGoodsReceiptBased,


      inco1                                           as IncotermsClassification,
      inco2                                           as IncotermsTransferLocation,
      incov                                           as IncotermsVersion,
      inco2_l                                         as IncotermsLocation1,
      inco3_l                                         as IncotermsLocation2,



      loevm                                           as DeletionIndicator,
      plifz                                           as PlannedDeliveryDurationInDays,
      telf1                                           as ContactPersonPhoneNumber,
      bstae                                           as SupplierConfirmationControlKey,
      kzabs                                           as IsOrderAcknRqd,

      //below fields moved down from I_BusinessPartnerPurgorg

      //fields requested by the TM colleagues
      xersy                                           as EvaldReceiptSettlementIsActive,
      xersr                                           as AutomaticEvaluatedRcptSettlmt,
      eikto                                           as SupplierAccountNumber,

      bolre                                           as SuplrIsSubjToSubsqntSettlement,
      umsae                                           as SuplrPurgOrgAgrmtOfBusVolIsRqd,
      xnbwy                                           as SuplrInvcRevalIsAllowed,
      prfre                                           as SuplrPurgOrgIsRlvtForPriceDetn,
      expvz                                           as IntrastatCrsBorderTrMode,
      megru                                           as ProductUnitGroup,
      rdprf                                           as RoundingProfile,
      lfrhy                                           as PlanningCycle,

      cast ( nrgew as xfeld preserving type )         as SuplrDiscountInKindIsGranted,
      // lfm1.nrgew                                  as SuplrDiscountInKindIsGranted,
      agrel                                           as SuplrIsRlvtForSettlmtMgmt,
      lebre                                           as InvoiceIsMMServiceEntryBased,
      paprf                                           as ProdStockAndSlsDataTransfPrfl,
      valid_pro                                       as EvaldRcptSettlementProfile,
      @Semantics.amount.currencyCode: 'PurchaseOrderCurrency'
      hscabs                                          as AbsoluteHandlingSurchargeAmt,
      hscpe                                           as PercentageHandlingSurchargeAmt,
      @Semantics.amount.currencyCode: 'PurchaseOrderCurrency'
      hscmin                                          as MinimumHandlingSurchargeAmt,
      @Semantics.amount.currencyCode: 'PurchaseOrderCurrency'
      hscmax                                          as MaximumHandlingSurchargeAmt,
      aubel                                           as AutomDebitCrtnIsEnbldOnGI,

      kzret                                           as SupplierIsReturnsSupplier,

      //For extensibility
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity,
      cast(   inco2_key  as /sapapo/location_uuid)    as IncotermsSupChnLoc1AddlUUID,
      cast(   inco3_key  as /sapapo/location_uuid)    as IncotermsSupChnLoc2AddlUUID,
      cast(   inco4_key  as /sapapo/location_uuid)    as IncotermsSupChnDvtgLocAddlUUID,

      //    InvoiceIsGoodsReceiptBased,
      //    CalculationSchemaGroupCode,
      //    POAutomaticGenerationIsAllowed,
      //    PricingDateControl,
      //    MaterialPlannedDeliveryDurn,
      //    ShippingCondition,
      //    ETag,
      //
      //    /* Associations */
      //    CalcSchemaGroupText,
      //    CurrencyText,
      //    ShippingConditionText,

      //No usage hence commenting and adding
      //    V_MD_SUPPLIER_PURCHASING.IncotermsText as _IncotermsText,
      //  _PaymentTermsText,       Removed as a Part of Whitelisting
      _IncotermsClassification,
      _Supplier.AuthorizationGroup,
      _Supplier

      //_TargetPublicBasicViewNameWithoutPrefix //expose the association for use by consumers

}
```
