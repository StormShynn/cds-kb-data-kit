---
name: I_CRDTMPAYTBEHAVIORBYSNDR
description: "Credit Mgmt Payment Behavior by Sender"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMPAYTBEHAVIORBYSNDR')/$value
semantic_en: "Credit Mgmt Payment Behavior by Sender"
semantic_vi: "Credit Mgmt Payment Behavior by Sender — CDS view cơ bản dựa trên ukmbp_vector_it."
keywords:
  - "credit"
  - "mgmt"
  - "payment"
  - "behavior"
  - "sender"
  - "business"
  - "partner"
  - "source"
  - "logical"
  - "system"
  - "segment"
  - "crdt"
  - "dunning"
  - "info"
  - "erroneous"
tags:
  - FIN
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - payment
  - bo:businesspartner
---
# I_CRDTMPAYTBEHAVIORBYSNDR

**Credit Mgmt Payment Behavior by Sender**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMPAYTBEHAVIORBYSNDR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `SourceLogicalSystem` | ✓ | |  | `logsys` | `CHAR(10)` | Logical system from which message originates |
| `CreditSegment` | ✓ | |  | `credit_sgmnt` | `CHAR(10)` | Credit Segment |
| `CrdtMDunningInfoIsErroneous` |  | |  | `cast(x_dunn_revoked as ukm_vector_dunn_data_erroneous preserving type)` | `CHAR(1)` | Dunning Data is Erroneous |
| `MaximumDunnedOpenItem` |  | |  | `cast( concat_with_space( concat_with_space( substring( _dun_ext_guid.objkey, 1, 4 ), substring( _dun_ext_guid.objkey, 5, 10 ), 1 ), concat_with_space( substring( _dun_ext_guid.objkey, 15, 4 ), substring( _dun_ext_guid.objkey, 19, 3 ), 1 ), 1 ) as ukm_vector_dunn_bor_key )` | `CHAR(70)` | Open Item with Highest Dunning Level |
| `MaximumDunningLevel` |  | |  | `dunn_max_lv` | `CHAR(10)` | Highest Dunning Level of Business Partner |
| `MaximumDunnedOpenItemCurrency` |  | |  | `cast(dunn_curr as ukm_vector_dunn_curr preserving type)` | `CUKY(5)` | Currency of Highest Dunned Item |
| `MaximumDunnedOpenItemAmount` |  | |  | `cast(dunn_amount as ukm_vector_dunn_amount preserving type)` | `CURR(15)` | Dunned Amount |
| `DunnedItemInfoTransmnDateTime` |  | |  | `cast(dunn_timestamp as ukm_dun_transmn_timestamp preserving type)` | `DEC(15)` | Date and Time of Transmission of Dunning Info |
| `NumberOfOpenItemsInMaxDunLevel` |  | |  | `dunn_counter` | `INT4(10)` | Number of Dunning Notices |
| `CrdtMOverdueItmInfoIsErroneous` |  | |  | `cast(x_ovdue_revoked as ukm_vector_oi_data_erroneous preserving type)` | `CHAR(1)` | Open Item Data is Erroneous |
| `OldestOpenItem` |  | |  | `cast( concat_with_space( concat_with_space( substring( _ovd_ext_guid.objkey, 1, 4 ), substring( _ovd_ext_guid.objkey, 5, 10 ), 1 ), concat_with_space( substring( _ovd_ext_guid.objkey, 15, 4 ), substring( _ovd_ext_guid.objkey, 19, 3 ), 1 ), 1 ) as ukm_vector_oldest_oi_bor_key)` | `CHAR(70)` | Oldest Open Item |
| `OldestOpenItemNetDueDate` |  | |  | `ovdue_net_date` | `DATS(8)` | Net Due Date |
| `OldestOpnItemNrOfDaysInArrears` |  | |  | `cast(ovdue_days as ukm_vector_oi_days_in_arrears preserving type)` | `DEC(3)` | Oldest Open Item: Days in Arrears |
| `OldestOpenItemAmount` |  | |  | `cast(ovdue_amount as ukm_vector_oldest_oi_amount preserving type)` | `CURR(15)` | Amount of Oldest Open Item |
| `OldestOpenItemCurrency` |  | |  | `cast(ovdue_curr as ukm_vector_ovdue_curr preserving type)` | `CUKY(5)` | Currency of Oldest Open Item |
| `OldestOpnItemInfoTransmnDteTme` |  | |  | `cast(ovdue_timestamp as ukm_ovrdue_transmn_timestamp preserving type)` | `DEC(15)` | Date and Time of Transmission of Oldest Overdue Item Info |
| `CrdtMPaymentInfoIsErroneous` |  | |  | `cast(x_paymnt_revoked as ukm_vector_paym_data_erroneous preserving type)` | `CHAR(1)` | Last Payment Info is Erroneous |
| `LastPaymentItem` |  | |  | `cast( concat_with_space( concat_with_space( substring( _pay_ext_guid.objkey, 1, 4 ), substring( _pay_ext_guid.objkey, 5, 10 ), 1 ), concat_with_space( substring( _pay_ext_guid.objkey, 15, 4 ), substring( _pay_ext_guid.objkey, 19, 3 ), 1 ), 1 ) as ukm_vector_paym_bor_key)` | `CHAR(70)` | Last Payment |
| `LastPaymentDate` |  | |  | `paymnt_date` | `DATS(8)` | Date of Last Payment |
| `LastPaymentItemAmount` |  | |  | `cast(paymnt_amount as ukm_vector_last_paym_amount preserving type)` | `CURR(15)` | Amount of Last Payment |
| `LastPaymentCurrency` |  | |  | `cast(paymnt_curr as ukm_vector_paymnt_curr preserving type)` | `CUKY(5)` | Currency of Last Payment |
| `LastPaymentInfoTransmnDateTime` |  | |  | `cast(paymnt_timestamp as ukm_payt_transmn_timestamp preserving type)` | `DEC(15)` | Date and Time of Transmission of  Last Payment Info |
| `CrdtMKeyFigureInfoIsErroneous` |  | |  | `cast(x_idx_revoked as ukm_vector_idx_data_erroneous preserving type)` | `CHAR(1)` | Key Figures are Erroneous |
| `SenderCurrency` |  | |  | `cast(idx_curr as ukm_vector_idx_curr preserving type)` | `CUKY(5)` | Currency of Key Figures |
| `DaysSalesOutstanding` |  | |  | `cast(idx_figure as ukm_days_sales_outstanding preserving type )` | `DEC(6)` | Key Figure: Days Sales Outstanding |
| `TotalOutstandingAmtInSndrCrcy` |  | |  | `cast(idx_amount as ukm_vector_total_outst_amount preserving type)` | `CURR(15)` | Total Outstanding Amount |
| `CrdtMKeyFigureTransmnDateTime` |  | |  | `idx_timestamp` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `NoCshDiscAvgNrOfDaysInArrears` |  | |  | `sl_arr_wo` | `DEC(3)` | Average Arrears for Payments Where No Cash Discount Taken |
| `PaytNoCshDiscTotAmtInSndrCrcy` |  | |  | `sl_arr_wo_amount` | `CURR(15)` | Gross Total of Cleared Items with Cash Discount Not Taken |
| `CshDiscClmAvgNrOfDaysInArrears` |  | |  | `sl_slarr_w` | `DEC(3)` | Average Arrears with Cash Discount Payments |
| `PaytWthCshDiscTotAmtInSndrCrcy` |  | |  | `sl_arr_w_amount` | `CURR(15)` | Gross Total of Cleared Items Without Cash Discount Loss |
| `TotLast12MnthsSlsAmtInSndrCrcy` |  | |  | `sales_vol` | `CURR(15)` | Sales of Last 12 Months |
| `Last12MnthsMaxSlsAmtInSndrCrcy` |  | |  | `sales_max` | `CURR(15)` | Highest Monthly Sales in Last 12 Months |
| `_BusinessPartner` | | ✓ | | | | |
| `_CreditSegment` | | ✓ | | | | |
| `_CreditSegmentCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_dun_ext_guid` | `ukm_ext_guid` | [*] |
| `_ovd_ext_guid` | `ukm_ext_guid` | [*] |
| `_pay_ext_guid` | `ukm_ext_guid` | [*] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CreditSegment` | `I_CreditManagementSegment` | [0..1] |
| `_CreditSegmentCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMPAYTBEHAVIORBYSNDR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMPAYTBEHAVIORBYSNDR')/$value)*

```abap
@EndUserText.label: 'Credit Mgmt Payment Behavior by Sender'
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog: { sqlViewName: 'ICRDTPAYTBEHSNDR',
                compiler.compareFilter: true
              }

@ObjectModel: { usageType: { dataClass:      #MASTER, //data is read in high volume via this view, but is changed only in small quantities
                             sizeCategory:   #L,      //we expecte to have less than 10.000.000 records
                             serviceQuality: #X
                           }
              }
@ObjectModel.supportedCapabilities:#SQL_DATA_SOURCE

//Basic View should not have more than 3 underlying SELECTs (for performance reasons). This view MUST have 3 UKM_EXT_GUID-read to restore the record transmitted by sender system
//Composite View is not allowed to read from the DB table directly
//Since an interface view on table ukm_ext_guid would be pointless, we live with the ATC prio3 warning about view comlexity.
@VDM: { viewType:  #BASIC }
@ClientHandling: { type:      #INHERITED,      //from the data source --> makes it client-dependent
                   algorithm: #SESSION_VARIABLE
                 }

@AccessControl: { authorizationCheck:    #CHECK,
                  personalData.blocking: #BLOCKED_DATA_EXCLUDED //data privacy, hide data from blocked business partners
                }
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_CrdtMPaytBehaviorBySndr
  as select from ukmbp_vector_it

  association [*]    to ukm_ext_guid              as _dun_ext_guid          on ukmbp_vector_it.dunn_pguid = _dun_ext_guid.guid
  association [*]    to ukm_ext_guid              as _ovd_ext_guid          on ukmbp_vector_it.ovdue_pguid = _ovd_ext_guid.guid
  association [*]    to ukm_ext_guid              as _pay_ext_guid          on ukmbp_vector_it.paymnt_pguid = _pay_ext_guid.guid

  association [0..1] to I_BusinessPartner         as _BusinessPartner       on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_CreditManagementSegment as _CreditSegment         on $projection.CreditSegment = _CreditSegment.CreditSegment
  association [0..1] to I_Currency                as _CreditSegmentCurrency on $projection.SenderCurrency = _CreditSegmentCurrency.Currency


{
      @ObjectModel: { foreignKey: { association: '_BusinessPartner' } }
  key partner                                                                  as BusinessPartner,
  key logsys                                                                   as SourceLogicalSystem,
      @ObjectModel: { foreignKey: { association: '_CreditSegment' } }
  key credit_sgmnt                                                             as CreditSegment,

      //--- Higest dunning level, worst dunned item
      @Semantics: { booleanIndicator: true }
      cast(x_dunn_revoked as ukm_vector_dunn_data_erroneous preserving type)   as CrdtMDunningInfoIsErroneous,
      //    cast(_dun_ext_guid.objkey as ukm_vector_dunn_bor_key preserving type)      as MaximumDunnedOpenItem,
      cast(
        concat_with_space(
                            concat_with_space(
                                               substring( _dun_ext_guid.objkey, 1, 4  ), //BUKRS
                                               substring( _dun_ext_guid.objkey, 5, 10 ), //BELNR
                                               1                                         //insert a single space between Bukrs and Belnr
                                             ),
                            concat_with_space(
                                               substring( _dun_ext_guid.objkey, 15, 4 ), //GJAHR
                                               substring( _dun_ext_guid.objkey, 19, 3 ), //BUZEI
                                               1
                                             ),
                            1
                          )
        as ukm_vector_dunn_bor_key )                                           as MaximumDunnedOpenItem, //formatted BOR key
      dunn_max_lv                                                              as MaximumDunningLevel,
      @Semantics.currencyCode: true
      cast(dunn_curr as ukm_vector_dunn_curr preserving type)                  as MaximumDunnedOpenItemCurrency,
      @Semantics.amount.currencyCode: 'MaximumDunnedOpenItemCurrency'
      cast(dunn_amount as ukm_vector_dunn_amount preserving type)              as MaximumDunnedOpenItemAmount,
      //dunn_date                                                as MaximumDunnedOpenItemDate,   //not required on UI: SAP GUI and Fiori don't show it
      cast(dunn_timestamp as ukm_dun_transmn_timestamp preserving type)        as DunnedItemInfoTransmnDateTime,
      dunn_counter                                                             as NumberOfOpenItemsInMaxDunLevel,

      // --- Oldest overdue item
      @Semantics: { booleanIndicator: true }
      cast(x_ovdue_revoked as ukm_vector_oi_data_erroneous preserving type)    as CrdtMOverdueItmInfoIsErroneous,
      //    cast(_ovd_ext_guid.objkey as ukm_vector_oldest_oi_bor_key preserving type) as OldestOpenItem,
      cast(
        concat_with_space(
                            concat_with_space(
                                               substring( _ovd_ext_guid.objkey, 1, 4  ), //BUKRS
                                               substring( _ovd_ext_guid.objkey, 5, 10 ), //BELNR
                                               1                                         //insert a single space between Bukrs and Belnr
                                             ),
                            concat_with_space(
                                               substring( _ovd_ext_guid.objkey, 15, 4 ), //GJAHR
                                               substring( _ovd_ext_guid.objkey, 19, 3 ), //BUZEI
                                               1
                                             ),
                            1
                          )
      as ukm_vector_oldest_oi_bor_key)                                         as OldestOpenItem,
      @Semantics: { businessDate: { at: true } }
      ovdue_net_date                                                           as OldestOpenItemNetDueDate,
      cast(ovdue_days as ukm_vector_oi_days_in_arrears preserving type)        as OldestOpnItemNrOfDaysInArrears,
      @Semantics.amount.currencyCode: 'OldestOpenItemCurrency'
      cast(ovdue_amount as ukm_vector_oldest_oi_amount preserving type)        as OldestOpenItemAmount,
      @Semantics.currencyCode: true
      cast(ovdue_curr as ukm_vector_ovdue_curr preserving type)                as OldestOpenItemCurrency, // Cast to DTEL with meaningful labels
      cast(ovdue_timestamp as ukm_ovrdue_transmn_timestamp preserving type)    as OldestOpnItemInfoTransmnDteTme,

      //--- Latest payment
      @Semantics: { booleanIndicator: true }
      cast(x_paymnt_revoked as ukm_vector_paym_data_erroneous preserving type) as CrdtMPaymentInfoIsErroneous,
      //    cast(_pay_ext_guid.objkey as ukm_vector_paym_bor_key preserving type)      as LastPaymentItem,
      cast(
        concat_with_space(
                            concat_with_space(
                                               substring( _pay_ext_guid.objkey, 1, 4  ), //BUKRS
                                               substring( _pay_ext_guid.objkey, 5, 10 ), //BELNR
                                               1                                         //insert a single space between Bukrs and Belnr
                                             ),
                            concat_with_space(
                                               substring( _pay_ext_guid.objkey, 15, 4 ), //GJAHR
                                               substring( _pay_ext_guid.objkey, 19, 3 ), //BUZEI
                                               1
                                             ),
                            1
                          )
      as ukm_vector_paym_bor_key)                                              as LastPaymentItem,
      @Semantics: { businessDate: { at: true } }
      paymnt_date                                                              as LastPaymentDate,
      @Semantics.amount.currencyCode: 'LastPaymentCurrency'
      cast(paymnt_amount as ukm_vector_last_paym_amount preserving type)       as LastPaymentItemAmount,
      @Semantics.currencyCode: true
      cast(paymnt_curr as ukm_vector_paymnt_curr preserving type)              as LastPaymentCurrency,
      cast(paymnt_timestamp as ukm_payt_transmn_timestamp preserving type)     as LastPaymentInfoTransmnDateTime,

      //--- Key figures
      @Semantics: { booleanIndicator: true }
      cast(x_idx_revoked as ukm_vector_idx_data_erroneous preserving type)     as CrdtMKeyFigureInfoIsErroneous,
      @Semantics.currencyCode: true
      cast(idx_curr as ukm_vector_idx_curr preserving type)                    as SenderCurrency,
      cast(idx_figure as ukm_days_sales_outstanding preserving type )          as DaysSalesOutstanding,
      @Semantics.amount.currencyCode: 'SenderCurrency'
      cast(idx_amount as ukm_vector_total_outst_amount preserving type)        as TotalOutstandingAmtInSndrCrcy,
      idx_timestamp                                                            as CrdtMKeyFigureTransmnDateTime,
      sl_arr_wo                                                                as NoCshDiscAvgNrOfDaysInArrears,
      @Semantics.amount.currencyCode: 'SenderCurrency'
      sl_arr_wo_amount                                                         as PaytNoCshDiscTotAmtInSndrCrcy,
      //       cast(sl_arr_wo_amount as ukm_cash_discount_loss_total preserving type)    as PaytNoCshDiscTotAmtInSndrCrcy,
      sl_slarr_w                                                               as CshDiscClmAvgNrOfDaysInArrears,
      @Semantics.amount.currencyCode: 'SenderCurrency'
      sl_arr_w_amount                                                          as PaytWthCshDiscTotAmtInSndrCrcy,
      @Semantics.amount.currencyCode: 'SenderCurrency'
      sales_vol                                                                as TotLast12MnthsSlsAmtInSndrCrcy,
      @Semantics.amount.currencyCode: 'SenderCurrency'
      sales_max                                                                as Last12MnthsMaxSlsAmtInSndrCrcy,
      //col_sub_percent,           open items in collection by third party - not supported in FSCM Credit Mgmt
      //col_sub_amount             dto. - not supported

      _BusinessPartner,
      _CreditSegment,
      _CreditSegmentCurrency
}
```
