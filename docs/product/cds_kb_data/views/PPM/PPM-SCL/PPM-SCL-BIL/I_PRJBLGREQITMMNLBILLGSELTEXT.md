---
name: I_PRJBLGREQITMMNLBILLGSELTEXT
description: "Prjblgreqitmmnlbillgseltext"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - text-view
  - text
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_PRJBLGREQITMMNLBILLGSELTEXT

**Prjblgreqitmmnlbillgseltext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `ManualBillgSelForPrjBlgReqItem` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pbr_apprvl_status preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `MnlBillgSelForPrjBlgReqItmText` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProjBillgReqItmMnlBillgSel` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.technicalName: 'IPBRMNLBLGSELTXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Prj Billg Req Itm Mnl Billg Sel - Txt'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
}

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'ManualBillgSelForPrjBlgReqItem'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
                                     
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API


define view entity I_PrjBlgReqItmMnlBillgSelText as select from dd07t
  association        to parent I_ProjBillgReqItmMnlBillgSel as _ProjBillgReqItmMnlBillgSel on $projection.ManualBillgSelForPrjBlgReqItem = _ProjBillgReqItmMnlBillgSel.ManualBillgSelForPrjBlgReqItem
  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language
{
       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
   key cast( dd07t.ddlanguage as spras preserving type )          as Language,

       @ObjectModel.foreignKey.association: '_ProjBillgReqItmMnlBillgSel'
       @ObjectModel.text.element: ['MnlBillgSelForPrjBlgReqItmText']
   key cast( substring( domvalue_l, 1, 1 ) as pbr_apprvl_status preserving type ) as ManualBillgSelForPrjBlgReqItem,

       @Analytics.hidden: true
       @Consumption.hidden: true
       dd07t.domvalue_l as DomainValue,
       
       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       @Search.ranking: #LOW
       @Semantics.text: true
       ddtext                                                     as MnlBillgSelForPrjBlgReqItmText,
     
       _ProjBillgReqItmMnlBillgSel,
       _Language
   
} where domname  = 'PBRI_SELECTION ' and as4local = 'A'
```
