---
name: I_SALESDOCUMENTITEMCATEGORY
description: Salesdocumentitemcategory
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - sales-document
  - document
  - item-level
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTITEMCATEGORY

**Salesdocumentitemcategory**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesDocumentItemCategory` | ✓ | |  | `pstyv` |
| `BillingRelevanceCode` |  | |  | `fkrel` |
| `ScheduleLineIsAllowed` |  | |  | `eterl` |
| `PricingRelevance` |  | |  | `prsfd` |
| `TextDeterminationProcedure` |  | |  | `cast(txtgr as sls_doc_text_detn_item preserving type )` |
| `PartnerDeterminationProcedure` |  | |  | `cast(pargr as sls_doc_partner_detn_item preserving type )` |
| `PropagatePrftbltySgmt2BOM` |  | |  | `propagate_paobjnr_bom` |
| `CostDeterminationIsRequired` |  | |  | `evrwr` |
| `StatisticalValueControl` |  | |  | `kowrr` |
| `SlsDocBOMExplsnStrucScp` |  | |  | `strum` |
| `_Text` | | ✓ | | |
| `_BillingRelevanceCode` | | ✓ | | |
| `_PricingRelevance` | | ✓ | | |
| `_TextDeterminationProcedure` | | ✓ | | |
| `_PartDeterminationProcedure` | | ✓ | | |
| `_PropagatePrftbltySgmt2BOM` | | ✓ | | |
| `_StatisticalValueControl` | | ✓ | | |
| `_SlsDocBOMExplsnStrucScp` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesDocumentItemCategoryT` | [0..*] |
| `_BillingRelevanceCode` | `I_BillingRelevanceCode` | [0..1] |
| `_PricingRelevance` | `I_PricingRelevance` | [0..1] |
| `_TextDeterminationProcedure` | `I_SDDocItemTextDetnProcedure` | [0..1] |
| `_PartDeterminationProcedure` | `I_PartDeterminationProcedure` | [0..1] |
| `_PropagatePrftbltySgmt2BOM` | `I_PropagatePrftbltySgmt2BOM` | [0..1] |
| `_StatisticalValueControl` | `I_StatisticalValueControl` | [0..1] |
| `_SlsDocBOMExplsnStrucScp` | `I_SlsDocBOMExplsnStrucScp` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@EndUserText.label: 'Sales Document Item Category'
@ObjectModel:{
  representativeKey: 'SalesDocumentItemCategory',
  sapObjectNodeType.name: 'SalesDocumentItemCategory',
  usageType:{
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE ],
  modelingPattern: #ANALYTICAL_DIMENSION 
}
@Analytics:{ 
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@AbapCatalog:{
  sqlViewName: 'ISDSLSDOCITMCAT',
  buffering:{
    status: #ACTIVE,
    type: #FULL
  },
  compiler.compareFilter: true
}
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations:true
}

define view I_SalesDocumentItemCategory
  as select from tvap
  association [0..*] to I_SalesDocumentItemCategoryT as _Text                       on $projection.SalesDocumentItemCategory = _Text.SalesDocumentItemCategory
  association [0..1] to I_BillingRelevanceCode       as _BillingRelevanceCode       on $projection.BillingRelevanceCode = _BillingRelevanceCode.BillingRelevanceCode
  association [0..1] to I_PricingRelevance           as _PricingRelevance           on $projection.PricingRelevance = _PricingRelevance.PricingRelevance
  association [0..1] to I_SDDocItemTextDetnProcedure as _TextDeterminationProcedure on $projection.TextDeterminationProcedure = _TextDeterminationProcedure.TextDeterminationProcedure
  association [0..1] to I_PartDeterminationProcedure as _PartDeterminationProcedure on $projection.PartnerDeterminationProcedure = _PartDeterminationProcedure.PartnerDeterminationProcedure
  association [0..1] to I_PropagatePrftbltySgmt2BOM  as _PropagatePrftbltySgmt2BOM  on $projection.PropagatePrftbltySgmt2BOM = _PropagatePrftbltySgmt2BOM.PropagatePrftbltySgmt2BOM
  association [0..1] to I_StatisticalValueControl    as _StatisticalValueControl    on $projection.StatisticalValueControl = _StatisticalValueControl.StatisticalValueControl
  association [0..1] to I_SlsDocBOMExplsnStrucScp    as _SlsDocBOMExplsnStrucScp    on $projection.SlsDocBOMExplsnStrucScp = _SlsDocBOMExplsnStrucScp.SlsDocBOMExplsnStrucScp

{
      //Key
      @ObjectModel.text.association: '_Text'
  key pstyv                                                            as SalesDocumentItemCategory,

      @ObjectModel.foreignKey.association: '_BillingRelevanceCode'
      fkrel                                                            as BillingRelevanceCode,
      eterl                                                            as ScheduleLineIsAllowed,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PricingRelevance'
      prsfd                                                            as PricingRelevance,
      @ObjectModel.foreignKey.association: '_TextDeterminationProcedure'
      cast(txtgr as sls_doc_text_detn_item preserving type )           as TextDeterminationProcedure,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartDeterminationProcedure'
      cast(pargr as sls_doc_partner_detn_item preserving type )        as PartnerDeterminationProcedure,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PropagatePrftbltySgmt2BOM'
      propagate_paobjnr_bom                                            as PropagatePrftbltySgmt2BOM,
      evrwr                                                            as CostDeterminationIsRequired,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      kowrr                                                            as StatisticalValueControl,    
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SlsDocBOMExplsnStrucScp'
      strum                                                            as SlsDocBOMExplsnStrucScp,   

      _Text,
      _BillingRelevanceCode,
      _PricingRelevance,
      _TextDeterminationProcedure,
      _PartDeterminationProcedure,
      _PropagatePrftbltySgmt2BOM,
      _StatisticalValueControl,
      _SlsDocBOMExplsnStrucScp
};
```
