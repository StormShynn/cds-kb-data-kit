---
name: I_TRANSPCHARGEITEM
description: "Transpchargeitem"
app_component: TM-CF-CC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-CF
  - TM-CF-CC
  - interface-view
  - item-level
  - component:TM-CF-CC-2CL
  - lob:Other
---
# I_TRANSPCHARGEITEM

**Transpchargeitem**

| Property | Value |
|---|---|
| App Component | `TM-CF-CC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChargeItemUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_chrg_itm_db_key preserving type)` |  |  |
| `TransportationChargeUUID` |  | |  | `cast(parent_key as /scmtms/vdm_transpcharge_uuid preserving type )` |  |  |
| `RefTransportationOrderNodeUUID` |  | |  | `cast(ref_key as /scmtms/vdm_tor_ref_db_nde_key preserving type)` |  |  |
| `RefTransportationOrderUUID` |  | |  | `cast(ref_root_key as /scmtms/vdm_tor_ref_db_key preserving type)` |  |  |
| `TranspChargeCalcLevel` |  | |  | `root_level` |  |  |
| `TranspChargePostingStatus` |  | |  | `invoicing` |  |  |
| `HostObjectSAPObjectType` |  | |  | `cast( case bintohex( host_bo_key ) when '80E0ED0A0C021DEE8CE07DB4266D17C4' then 'TransportationOrder' when '80E0ED0A0DD11DDEB4EA8E4375A74E6B' then 'SupplierFreightInvoiceRequest' else '' end as sap_object_type_raw )` |  |  |
| `HostObjNodeSAPObjectNodeType` |  | |  | `cast( case bintohex( host_node_key ) when '80E0ED0A0C021DDE8CE07DB5DFAD0818' then 'TransportationOrder' when '80E0ED0A0DD11DEEB4EA8E44A108915B' then 'SupplierFreightInvoiceRequest' else '' end as sap_object_node_type )` |  |  |
| `TranspChargeHostDocumentUUID` |  | |  | `cast(host_root_key as /scmtms/vdm_tcc_hst_doc_uuid preserving type )` |  |  |
| `TransportationAgreementUUID` |  | |  | `cast(uuid057 as /scmtms/vdm_tcm_agreement_uuid preserving type )` |  |  |
| `TranspChrgCalcSheetUUID` |  | |  | `cast(uuid020 as /scmtms/vdm_tcm_calcsheet_uuid preserving type )` |  |  |
| `TranspChargeCalcStatus` |  | |  | `calc_status` |  |  |
| `BusinessPartnerUUID` |  | |  | `cast(party_uuid as bu_partner_guid preserving type)` |  |  |
| `TranspDimnWeightProfile` |  | |  | `dim_wt_profile` |  |  |
| `TranspChrgItemExchangeRateDate` |  | |  | `exchdate_doc` |  |  |
| `TranspChrgItemDocCurrency` |  | |  | `cast(currcode016 as /scmtms/vdm_tcc_doc_currency preserving type )` |  |  |
| `TranspChrgItmTotAmtInDocCrcy` |  | |  | `cast( cast( amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_doc_amount )` |  |  |
| `TranspChrgItemLoclCurrency` |  | |  | `cast(currcode016lcl as /scmtms/vdm_tcc_loc_currency preserving type )` |  |  |
| `TranspChrgItmTotAmtInLoclCrcy` |  | |  | `cast( cast( amountlcl as abap.dec(31,6) ) * 10000 as /scmtms/vdm_local_amount )` |  |  |
| `TranspChrgItmInvcdAmount` |  | |  | `cast( cast( invoiced_amt as abap.dec(31,6)) * 10000 as /scmtms/vdm_invc_amount_ml )` |  |  |
| `TranspChrgItmInvcdAmtCrcy` |  | |  | `cast( invoiced_amt_curr as /scmtms/vdm_invc_amount_crcy preserving type )` |  |  |
| `TranspChargeItemIsHeaderCharge` |  | |  | `cast(is_header_charge as /scmtms/vdm_tcc_item_is_header preserving type )` |  |  |
| `TranspChargeCalculationDateTme` |  | |  | `calcdate_tstmp` |  |  |
| `TranspChargePaymentTerms` |  | |  | `zterm` |  |  |
| `TranspChargePostingDate` |  | |  | `posting_date` |  |  |
| `TranspChargeItemTypeCode` |  | |  | `type_code` |  |  |
| `TranspChargeCalcLevelRefUUID` |  | |  | `cast(host_key as transpchargecalclevelrefuuid preserving type )` |  |  |
| `TranspChrgCalcDteTmeIsChanged` |  | |  | `fix_calcdate` |  |  |
| `_TranspChargePostingStatus` | | ✓ | | | | |
| `_TranspChargeCalcLevel` | | ✓ | | | | |
| `_TranspChargeCalcStatus` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_TranspChargeDocumentCurrency` | | ✓ | | | | |
| `_TranspChrgItemLoclCurrency` | | ✓ | | | | |
| `_TranspChrgItmInvcdAmtCrcy` | | ✓ | | | | |
| `_TransportationAgreement` | | ✓ | | | | |
| `_TranspDimnWeightProfile` | | ✓ | | | | |
| `_TranspChargeCalcSheet` | | ✓ | | | | |
| `_PaymentTermsText` | | ✓ | | | | |
| `_TransportationOrderCharge` | | ✓ | | | | |
| `_TransportationChargeElement` | | ✓ | | | | |
| `_TranspChargeExchRate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspChargePostingStatus` | `I_TranspChargePostingStatus` | [0..1] |
| `_TranspChargeCalcLevel` | `I_TranspChargeCalcLevel` | [0..1] |
| `_TranspChargeCalcStatus` | `I_TranspChargeCalcStatus` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_TranspChargeDocumentCurrency` | `I_Currency` | [0..1] |
| `_TranspChrgItemLoclCurrency` | `I_Currency` | [0..1] |
| `_TranspChrgItmInvcdAmtCrcy` | `I_Currency` | [0..1] |
| `_TransportationAgreement` | `I_TransportationAgreement` | [0..1] |
| `_TranspDimnWeightProfile` | `I_TranspDimnWeightProfile` | [0..1] |
| `_TranspChargeCalcSheet` | `I_TranspChrgCalculationSheet_2` | [0..1] |
| `_PaymentTermsText` | `I_PaymentTermsText` | [0..*] |

## Source Code

```abap
@AccessControl: {authorizationCheck:     #PRIVILEGED_ONLY,
                 personalData.blocking:  #('TRANSACTIONAL_DATA'),
                 privilegedAssociations:  ['_TransportationChargeElement','_TranspChargeCalcSheet','_TranspChargeExchRate', '_TransportationAgreement','_TransportationOrderCharge']}
@EndUserText:       {label:              'Transportation Charge Item'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:       {representativeKey:   'TranspChargeItemUUID',
                     usageType:          {serviceQuality: #A,
                                          sizeCategory:   #XL,
                     dataClass:           #TRANSACTIONAL},
                     sapObjectNodeType.name: 'TransportationChargeItem',
                     supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@VDM:               {viewType:           #BASIC,
                     lifecycle.contract.type: #PUBLIC_LOCAL_API}

define view entity I_TranspChargeItem
  as select from /scmtms/d_tchrgi
  /*association to Business Object parent node*/
  association        to parent I_TransportationCharge  as _TransportationOrderCharge    on $projection.TransportationChargeUUID = _TransportationOrderCharge.TransportationChargeUUID
  /*Composition and association to Business Object Child node*/
  composition [0..*] of I_TransportationChargeElement  as _TransportationChargeElement
  composition [0..*] of I_TranspChrgItemExchangeRate   as _TranspChargeExchRate
  /* Foreign Key and Text Associations */
  association [0..1] to I_TranspChargePostingStatus    as _TranspChargePostingStatus    on $projection.TranspChargePostingStatus = _TranspChargePostingStatus.TranspChargePostingStatus
  association [0..1] to I_TranspChargeCalcLevel        as _TranspChargeCalcLevel        on $projection.TranspChargeCalcLevel = _TranspChargeCalcLevel.TranspChargeCalcLevel
  association [0..1] to I_TranspChargeCalcStatus       as _TranspChargeCalcStatus       on $projection.TranspChargeCalcStatus = _TranspChargeCalcStatus.TranspChargeCalcStatus
  association [0..1] to I_BusinessPartner              as _BusinessPartner              on $projection.BusinessPartnerUUID = _BusinessPartner.BusinessPartnerUUID
  association [0..1] to I_Currency                     as _TranspChargeDocumentCurrency on $projection.TranspChrgItemDocCurrency = _TranspChargeDocumentCurrency.Currency
  association [0..1] to I_Currency                     as _TranspChrgItemLoclCurrency   on $projection.TranspChrgItemLoclCurrency = _TranspChrgItemLoclCurrency.Currency
  association [0..1] to I_Currency                     as _TranspChrgItmInvcdAmtCrcy    on $projection.TranspChrgItmInvcdAmtCrcy = _TranspChrgItmInvcdAmtCrcy.Currency
  association [0..1] to I_TransportationAgreement      as _TransportationAgreement      on $projection.TransportationAgreementUUID = _TransportationAgreement.TransportationAgreementUUID
  association [0..1] to I_TranspDimnWeightProfile      as _TranspDimnWeightProfile      on $projection.TranspDimnWeightProfile = _TranspDimnWeightProfile.TranspDimnWeightProfile
  association [0..1] to I_TranspChrgCalculationSheet_2 as _TranspChargeCalcSheet        on $projection.TranspChrgCalcSheetUUID = _TranspChargeCalcSheet.TranspCalculationSheetUUID
  association [0..*] to I_PaymentTermsText             as _PaymentTermsText             on $projection.TranspChargePaymentTerms = _PaymentTermsText.PaymentTerms
{
  key cast(db_key as /scmtms/vdm_chrg_itm_db_key preserving type)                         as TranspChargeItemUUID,
      cast(parent_key as /scmtms/vdm_transpcharge_uuid preserving type )                  as TransportationChargeUUID,
      cast(ref_key as /scmtms/vdm_tor_ref_db_nde_key preserving type)                     as RefTransportationOrderNodeUUID,
      cast(ref_root_key as /scmtms/vdm_tor_ref_db_key preserving type)                    as RefTransportationOrderUUID,
      @ObjectModel.foreignKey.association: '_TranspChargeCalcLevel'
      root_level                                                                          as TranspChargeCalcLevel,
      @ObjectModel.foreignKey.association: '_TranspChargePostingStatus'
      invoicing                                                                           as TranspChargePostingStatus,
      cast(
         case bintohex( host_bo_key )
            when '80E0ED0A0C021DEE8CE07DB4266D17C4'   then 'TransportationOrder'
            when '80E0ED0A0DD11DDEB4EA8E4375A74E6B'   then 'SupplierFreightInvoiceRequest'
            else ''
               end as sap_object_type_raw )                                               as HostObjectSAPObjectType,
      cast(
         case bintohex( host_node_key )
            when '80E0ED0A0C021DDE8CE07DB5DFAD0818' then 'TransportationOrder'
            when '80E0ED0A0DD11DEEB4EA8E44A108915B' then 'SupplierFreightInvoiceRequest'
            else ''
               end as sap_object_node_type )                                              as HostObjNodeSAPObjectNodeType,
      cast(host_root_key as /scmtms/vdm_tcc_hst_doc_uuid preserving type )                as TranspChargeHostDocumentUUID,
      @ObjectModel.foreignKey.association: '_TransportationAgreement'
      cast(uuid057 as /scmtms/vdm_tcm_agreement_uuid preserving type )                    as TransportationAgreementUUID,
      @ObjectModel.foreignKey.association: '_TranspChargeCalcSheet'
      cast(uuid020 as /scmtms/vdm_tcm_calcsheet_uuid preserving type )                    as TranspChrgCalcSheetUUID,
      @ObjectModel.foreignKey.association: '_TranspChargeCalcStatus'
      calc_status                                                                         as TranspChargeCalcStatus,
      cast(party_uuid as bu_partner_guid preserving type)                                 as BusinessPartnerUUID,
      dim_wt_profile                                                                      as TranspDimnWeightProfile,
      exchdate_doc                                                                        as TranspChrgItemExchangeRateDate,
      @ObjectModel.foreignKey.association: '_TranspChargeDocumentCurrency'
      cast(currcode016 as /scmtms/vdm_tcc_doc_currency preserving type )                  as TranspChrgItemDocCurrency,
      @Semantics.amount.currencyCode: 'TranspChrgItemDocCurrency'
      cast( cast( amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_doc_amount )          as TranspChrgItmTotAmtInDocCrcy,
      @ObjectModel.foreignKey.association: '_TranspChrgItemLoclCurrency'
      cast(currcode016lcl as /scmtms/vdm_tcc_loc_currency preserving type )               as TranspChrgItemLoclCurrency,
      @Semantics.amount.currencyCode: 'TranspChrgItemLoclCurrency'
      cast( cast( amountlcl as abap.dec(31,6) ) * 10000 as /scmtms/vdm_local_amount )     as TranspChrgItmTotAmtInLoclCrcy,
      //Invoiced Amount
      @Semantics.amount.currencyCode: 'TranspChrgItmInvcdAmtCrcy'
      @Aggregation.default: #SUM
      cast( cast( invoiced_amt as abap.dec(31,6)) * 10000 as /scmtms/vdm_invc_amount_ml ) as TranspChrgItmInvcdAmount,
      @ObjectModel.foreignKey.association: '_TranspChrgItmInvcdAmtCrcy'
      cast( invoiced_amt_curr as /scmtms/vdm_invc_amount_crcy preserving type )           as TranspChrgItmInvcdAmtCrcy,
      cast(is_header_charge as /scmtms/vdm_tcc_item_is_header preserving type )           as TranspChargeItemIsHeaderCharge,
      calcdate_tstmp                                                                      as TranspChargeCalculationDateTme,
      @ObjectModel.text.association: '_PaymentTermsText'
      zterm                                                                               as TranspChargePaymentTerms,
      posting_date                                                                        as TranspChargePostingDate,
      type_code                                                                           as TranspChargeItemTypeCode,
      cast(host_key as transpchargecalclevelrefuuid preserving type )                     as TranspChargeCalcLevelRefUUID,
      fix_calcdate                                                                        as TranspChrgCalcDteTmeIsChanged,

      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _TransportationOrderCharge,

      _TransportationChargeElement,
      _TranspChargePostingStatus,
      _TranspChargeCalcLevel,
      _TranspChargeCalcStatus,
      _BusinessPartner,
      _TranspChargeDocumentCurrency,
      _TranspChrgItemLoclCurrency,
      _TranspChrgItmInvcdAmtCrcy,
      _TransportationAgreement,
      _TranspChargeExchRate,
      _TranspDimnWeightProfile,
      _TranspChargeCalcSheet,
      _PaymentTermsText
}
```
