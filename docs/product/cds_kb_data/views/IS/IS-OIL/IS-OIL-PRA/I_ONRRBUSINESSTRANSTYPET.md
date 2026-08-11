---
name: I_ONRRBUSINESSTRANSTYPET
description: "ONRR Business Transaction Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRBUSINESSTRANSTYPET')/$value
semantic_en: "ONRR Business Transaction Type - Text"
semantic_vi: "ONRR Business Transaction Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "onrr"
  - "business"
  - "transaction"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - transaction
---
# I_ONRRBUSINESSTRANSTYPET

**ONRR Business Transaction Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRBUSINESSTRANSTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRBusinessTransactionType` | ✓ | |  | `cast (domvalue_l as /pra/fp_prdt_line_type )` | `CHAR(1)` | ONRR-2014 - PRA Detail Line Type |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `ONRRBusTransactionTypeName` |  | |  | `cast (ddtext as oiu_vdm_onrr_bus_tran_typ_name )` | `CHAR(60)` | ONRR Business transaction type Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRBUSINESSTRANSTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRBUSINESSTRANSTYPET')/$value)*

```abap
@EndUserText.label: 'ONRR Business Transaction Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRRBUSTRTYT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ONRRBusinessTransactionType'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
define view I_ONRRBusinessTransTypeT
  as select from dd07t
{
  key cast (domvalue_l as /pra/fp_prdt_line_type )                        as ONRRBusinessTransactionType,
      @Semantics.language
  key cast( ddlanguage as spras )                                         as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_onrr_bus_tran_typ_name )                    as ONRRBusTransactionTypeName
}
where
      domname  = '/PRA/FP_PRDT_LINE_TYPE'
  and as4local = 'A';
```
