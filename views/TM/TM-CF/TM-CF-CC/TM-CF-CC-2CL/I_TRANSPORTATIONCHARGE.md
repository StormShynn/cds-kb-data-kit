---
name: I_TRANSPORTATIONCHARGE
description: Transportationcharge
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
  - transport
  - component:TM-CF-CC-2CL
  - lob:Other
---
# I_TRANSPORTATIONCHARGE

**Transportationcharge**

| Property | Value |
|---|---|
| App Component | `TM-CF-CC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationChargeUUID` | `cast(db_key as /scmtms/vdm_transpcharge_uuid preserving type)` |
| `TranspChargeHostDocumentUUID` | `cast(host_key as /scmtms/vdm_tcc_hst_doc_uuid preserving type )` |
| `HostObjectSAPObjectType` | `cast( case bintohex( host_bo_key ) when '80E0ED0A0C021DEE8CE07DB4266D17C4' then 'TransportationOrder' when '80E0ED0A0DD11DDEB4EA8E4375A74E6B' then 'SupplierFreightInvoiceRequest' else '' end as sap_object_type_raw )` |
| `HostObjNodeSAPObjectNodeType` | `cast( case bintohex( host_node_key ) when '80E0ED0A0C021DDE8CE07DB5DFAD0818' then 'TransportationOrder' when '80E0ED0A0DD11DEEB4EA8E44A108915B' then 'SupplierFreightInvoiceRequest' else '' end as sap_object_node_type )` |
| `TranspChargeDocumentCurrency` | `doc_currency` |
| `TranspChrgTotalAmtInDocCrcy` | `cast( cast( total_amount as abap.dec(31,6) ) * 10000 as transpchrgtotalamtindoccrcy )` |
| `TranspChargeLocalCurrency` | `lcl_currency` |
| `TranspChrgTotalAmtInLoclCrcy` | `cast( cast( net_amount_lcl as abap.dec(31,6) ) * 10000 as transpchrgtotalamtinloclcrcy )` |
| `TranspChargeCalculationDateTme` | `calcdate_tstmp` |
| `TranspChargePostingStatus` | `cast( invoicing as /scmtms/vdm_posting_status preserving type )` |
| `TranspChargeCalcStatus` | `calc_status` |
| `TranspChargeUsage` | `tcusagecd085` |
| `ExchangeRateDate` | `exchdate_doc` |
| `_TranspChargePostingStatus` | *Association* |
| `_TranspChargeCalcStatus` | *Association* |
| `_TranspChargeDocumentCurrency` | *Association* |
| `_TranspChargeLocalCurrency` | *Association* |
| `_TranspChargeItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspChargePostingStatus` | `I_TranspChargePostingStatus` | [0..1] |
| `_TranspChargeCalcStatus` | `I_TranspChargeCalcStatus` | [0..1] |
| `_TranspChargeDocumentCurrency` | `I_Currency` | [0..1] |
| `_TranspChargeLocalCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #PRIVILEGED_ONLY,
                  personalData.blocking:#('TRANSACTIONAL_DATA'),
                  privilegedAssociations:  [ '_TranspChargeItem' ]}
@EndUserText.label: 'Transportation Charge'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {compositionRoot:     true,
                 representativeKey:  'TransportationChargeUUID',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #XL,
                                      dataClass:      #TRANSACTIONAL},
                 sapObjectNodeType.name: 'TransportationCharge',
                 supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API}


define root view entity I_TransportationCharge
  as select from /scmtms/d_tchrgr
  /*Business Object related Node Composition*/
  composition [0..*] of I_TranspChargeItem          as _TranspChargeItem
  /*Foreign Key and Text Associations */
  association [0..1] to I_TranspChargePostingStatus as _TranspChargePostingStatus    on $projection.TranspChargePostingStatus = _TranspChargePostingStatus.TranspChargePostingStatus
  association [0..1] to I_TranspChargeCalcStatus    as _TranspChargeCalcStatus       on $projection.TranspChargeCalcStatus = _TranspChargeCalcStatus.TranspChargeCalcStatus
  association [0..1] to I_Currency                  as _TranspChargeDocumentCurrency on $projection.TranspChargeDocumentCurrency = _TranspChargeDocumentCurrency.Currency
  association [0..1] to I_Currency                  as _TranspChargeLocalCurrency    on $projection.TranspChargeLocalCurrency = _TranspChargeLocalCurrency.Currency
{
  key cast(db_key as /scmtms/vdm_transpcharge_uuid preserving type)                            as TransportationChargeUUID,
      cast(host_key as /scmtms/vdm_tcc_hst_doc_uuid preserving type )                          as TranspChargeHostDocumentUUID,
      cast(
         case bintohex( host_bo_key )
             when '80E0ED0A0C021DEE8CE07DB4266D17C4'   then 'TransportationOrder'
             when '80E0ED0A0DD11DDEB4EA8E4375A74E6B'   then 'SupplierFreightInvoiceRequest'
             else ''
            end as sap_object_type_raw )                                                       as HostObjectSAPObjectType,
      cast(
         case bintohex( host_node_key )
             when '80E0ED0A0C021DDE8CE07DB5DFAD0818' then 'TransportationOrder'
             when '80E0ED0A0DD11DEEB4EA8E44A108915B' then 'SupplierFreightInvoiceRequest'
             else ''
            end as sap_object_node_type )                                                      as HostObjNodeSAPObjectNodeType,
      @ObjectModel.foreignKey.association: '_TranspChargeDocumentCurrency'
      doc_currency                                                                             as TranspChargeDocumentCurrency,
      @Semantics.amount.currencyCode: 'TranspChargeDocumentCurrency'
      cast( cast( total_amount as abap.dec(31,6) ) * 10000 as transpchrgtotalamtindoccrcy )    as TranspChrgTotalAmtInDocCrcy,
      @ObjectModel.foreignKey.association: '_TranspChargeLocalCurrency'
      lcl_currency                                                                             as TranspChargeLocalCurrency,
      @Semantics.amount.currencyCode: 'TranspChargeLocalCurrency'
      cast( cast( net_amount_lcl as abap.dec(31,6) ) * 10000 as transpchrgtotalamtinloclcrcy ) as TranspChrgTotalAmtInLoclCrcy,
      calcdate_tstmp                                                                           as TranspChargeCalculationDateTme,
      @ObjectModel.foreignKey.association: '_TranspChargePostingStatus'
      cast( invoicing as /scmtms/vdm_posting_status preserving type )                          as TranspChargePostingStatus,
      @ObjectModel.foreignKey.association: '_TranspChargeCalcStatus'
      calc_status                                                                              as TranspChargeCalcStatus,
      tcusagecd085                                                                             as TranspChargeUsage,
      exchdate_doc                                                                             as ExchangeRateDate,
      /* Associations  */
      _TranspChargeItem,
      _TranspChargePostingStatus,
      _TranspChargeCalcStatus,
      _TranspChargeDocumentCurrency,
      _TranspChargeLocalCurrency
}
```
