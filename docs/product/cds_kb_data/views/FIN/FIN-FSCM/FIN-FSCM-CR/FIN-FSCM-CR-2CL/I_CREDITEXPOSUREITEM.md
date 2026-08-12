---
name: I_CREDITEXPOSUREITEM
description: "Creditexposureitem"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - credit
  - item-level
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CREDITEXPOSUREITEM

**Creditexposureitem**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `cast( partner as ukm_contributing_partner preserving type )` |  |  |
| `CreditSegment` | ✓ | |  | `cast ( credit_sgmnt as ukm_contributing_segment preserving type )` |  |  |
| `CreditManagementLineItem` | ✓ | |  | `cast( iguid as ukm_line_item preserving type )` |  |  |
| `CreditMgmtLinkedLineItemKey` |  | | `_ext_guid` | `objkey` |  |  |
| `BusinessObjectType` |  | | `_ext_guid` | `objtype` |  |  |
| `LogicalSystem` |  | | `_ext_guid` | `logsys` |  |  |
| `CreditExposureUTCDateTime` |  | |  | `cast( tmstmp as tstrcreats preserving type )` |  |  |
| `CreditExposureCategory` |  | |  | `comm_typ` |  |  |
| `ExposureAmount` |  | |  | `amount` |  |  |
| `HedgedAmount` |  | |  | `amount_sec` |  |  |
| `Currency` |  | |  | `currency` |  |  |
| `OriginalLiableBusinessPartner` |  | |  | `msg_partner` |  |  |
| `OriginalLiableCreditSegment` |  | |  | `msg_sgmnt` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CreditSegment` | | ✓ | | | | |
| `_ExposureCategory` | | ✓ | | | | |
| `_OriginalLiableBusinessPartner` | | ✓ | | | | |
| `_OriginalLiableCreditSegment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_CreditSegment` | `I_CreditManagementSegment` | [1..1] |
| `_ExposureCategory` | `I_CreditExposureCategory` | [0..1] |
| `_OriginalLiableBusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_OriginalLiableCreditSegment` | `I_CreditManagementSegment` | [1..1] |
| `_ext_guid` | `ukm_ext_guid` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'ICRDTEXPITEM',
                compiler: { compareFilter: true } }
@AccessControl: { authorizationCheck: #CHECK,
                  personalData: { blocking: #BLOCKED_DATA_EXCLUDED } }
@EndUserText: { label: 'Credit Exposure Items' }
@VDM: { viewType: #BASIC,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@ObjectModel: { usageType: { serviceQuality: #A,
                             sizeCategory: #L,
                             dataClass: #TRANSACTIONAL },
                representativeKey: 'CreditManagementLineItem',
                semanticKey:       [ 'BusinessPartner','CreditSegment','CreditManagementLineItem' ],
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE] }
@Metadata.ignorePropagatedAnnotations:true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_CreditExposureItem
  as select from ukm_item

  association [1..1] to I_BusinessPartner         as _BusinessPartner               on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [1..1] to I_CreditManagementSegment as _CreditSegment                 on $projection.CreditSegment = _CreditSegment.CreditSegment
  association [0..1] to I_CreditExposureCategory  as _ExposureCategory              on $projection.CreditExposureCategory = _ExposureCategory.CreditExposureCategory
  association [1..1] to I_BusinessPartner         as _OriginalLiableBusinessPartner on $projection.OriginalLiableBusinessPartner = _OriginalLiableBusinessPartner.BusinessPartner
  association [1..1] to I_CreditManagementSegment as _OriginalLiableCreditSegment   on $projection.OriginalLiableCreditSegment = _OriginalLiableCreditSegment.CreditSegment
  association [0..1] to ukm_ext_guid              as _ext_guid                      on $projection.CreditManagementLineItem = _ext_guid.guid
{
         @ObjectModel.foreignKey.association: '_BusinessPartner'
  key    cast( partner  as ukm_contributing_partner preserving type )      as BusinessPartner,
         @ObjectModel.foreignKey.association: '_CreditSegment'
  key    cast ( credit_sgmnt as ukm_contributing_segment preserving type ) as CreditSegment,
  key    cast( iguid as ukm_line_item preserving type )                    as CreditManagementLineItem,
         _ext_guid.objkey                                                  as CreditMgmtLinkedLineItemKey,
         _ext_guid.objtype                                                 as BusinessObjectType,
         _ext_guid.logsys                                                  as LogicalSystem,
         cast( tmstmp as tstrcreats preserving type )                      as CreditExposureUTCDateTime,
         @ObjectModel.foreignKey.association: '_ExposureCategory'
         comm_typ                                                          as CreditExposureCategory,
         //         sum_typ,
         @Semantics.amount.currencyCode: 'Currency'
         amount                                                            as ExposureAmount,
         @Semantics.amount.currencyCode: 'Currency'
         amount_sec                                                        as HedgedAmount,
         currency                                                          as Currency,
         //         pmtyp,
         //         pmkey,
         //         pguid,
         //         sguid,
         //         status,
         msg_partner                                                       as OriginalLiableBusinessPartner,
         msg_sgmnt                                                         as OriginalLiableCreditSegment,
         _BusinessPartner,
         _CreditSegment,
         _ExposureCategory,
         _OriginalLiableBusinessPartner,
         _OriginalLiableCreditSegment
}
```
