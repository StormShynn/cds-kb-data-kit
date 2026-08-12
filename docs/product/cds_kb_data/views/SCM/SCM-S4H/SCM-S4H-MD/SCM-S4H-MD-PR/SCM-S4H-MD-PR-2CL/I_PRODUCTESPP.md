---
name: I_PRODUCTESPP
description: "This CDS view provides the consumer with a list of flags related to Extended Service Parts Planning. Description: Product ESPP active core entity"
app_component: SCM-S4H-MD-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTESPP')/$value
semantic_en: "This CDS view provides the consumer with a list of flags related to Extended Service Parts Planning. Description: Product ESPP active core entity"
semantic_vi: "Product ESPP active core entity — CDS view giao diện dựa trên mara."
keywords:
  - "product"
  - "espp"
  - "active"
  - "core"
  - "entity"
  - "order"
  - "procure"
  - "prod"
  - "push"
  - "dplnt"
  - "supplier"
  - "inventory"
  - "balancing"
  - "allowed"
tags:
  - SCM
  - bo:material
  - component:SCM-S4H-MD-PR-2CL
  - interface-view
  - plan
  - product
  - SCM-S4H
  - SCM-S4H-MD
  - SCM-S4H-MD-PR
  - SCM-S4H-MD-PR-2CL
---
# I_PRODUCTESPP

**This CDS view provides the consumer with a list of flags related to Extended Service Parts Planning. Description: Product ESPP active core entity**

| Property | Value |
|---|---|
| App Component | `SCM-S4H-MD-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTESPP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` | `CHAR(40)` | Material Number |
| `ProductIsForKitToOrder` |  | |  | `cast (scm_kitcomp as ui_scm_kitcomp preserving type )` | `CHAR(1)` | Product for Kit-to-Order |
| `ProductIsForProcureToOrder` |  | |  | `scm_prod_paoopt` | `CHAR(1)` | Product can be used for Procure-to-Order |
| `ProdIsForPushDplntFromSupplier` |  | |  | `cast (scm_bod_deplvl as ui_scm_bod_deplvl preserving type )` | `CHAR(1)` | Carry Out Push Deployment from Supplier |
| `InventoryBalancingIsNotAllowed` |  | |  | `cast (scm_restrict_invbal as ui_scm_restrict_invbal preserving type )` | `CHAR(1)` | Inventory Balancing Not Allowed |
| `ProdIsForGlobalStockOnEntryLoc` |  | |  | `cast (scm_drp_gl_stock as ui_scm_drp_gl_stock preserving type )` | `CHAR(1)` | Global Stock on Entry Location DRP |
| `ProdIsExclFromExpressShipment` |  | |  | `cast (scm_excl_expedite as ui_scm_excl_expedite preserving type )` | `CHAR(1)` | Exclude from Express Shipment |
| `SrvcPartsProductIsNew` |  | |  | `newprod_indi` | `CHAR(1)` | New Product |
| `SrvcPartsProdProdnStartDate` |  | |  | `cast (prd_startdt as /sapapo/prd_startdt_cds preserving type )` | `DATS(8)` | Production Start Date |
| `SrvcPartsProdProdnEndDate` |  | |  | `prd_enddt` | `DATS(8)` | Production End Date |
| `SrvcPartsInvtryPlngMode` |  | |  | `cast (inv_pln_mode as espp_inv_pln_mode_cds preserving type )` | `CHAR(1)` | Inventory Planning Mode |
| `_Product` | | ✓ | | | | |
| `_SrvcPartsInvtryPlngModeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_SrvcPartsInvtryPlngModeText` | `I_SrvcPartsInvtryPlngModeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTESPP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTESPP')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'IPRDESPP',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Product ESPP active core entity'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory : #L,
    dataClass: #MASTER
  }
}
@VDM.viewType: #BASIC
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE
]
@ObjectModel.sapObjectNodeType.name:'Product'
@AccessControl.personalData.blocking: #NOT_REQUIRED

define view I_ProductESPP
  as select from mara
  association [1..1] to I_Product as _Product on $projection.Product = _Product.Product 
  association [0..*] to I_SrvcPartsInvtryPlngModeText as _SrvcPartsInvtryPlngModeText on $projection.SrvcPartsInvtryPlngMode = _SrvcPartsInvtryPlngModeText.SrvcPartsInvtryPlngMode
{
  key matnr                                                                 as Product,
      cast (scm_kitcomp as ui_scm_kitcomp preserving type )                 as ProductIsForKitToOrder,
      scm_prod_paoopt                                                       as ProductIsForProcureToOrder,
      cast (scm_bod_deplvl as ui_scm_bod_deplvl preserving type )           as ProdIsForPushDplntFromSupplier,
      cast (scm_restrict_invbal as ui_scm_restrict_invbal preserving type ) as InventoryBalancingIsNotAllowed,
      cast (scm_drp_gl_stock as ui_scm_drp_gl_stock preserving type )       as ProdIsForGlobalStockOnEntryLoc,
      cast (scm_excl_expedite as ui_scm_excl_expedite preserving type )     as ProdIsExclFromExpressShipment,
      newprod_indi                                                          as SrvcPartsProductIsNew,
      cast (prd_startdt as /sapapo/prd_startdt_cds preserving type )        as SrvcPartsProdProdnStartDate,
      prd_enddt                                                             as SrvcPartsProdProdnEndDate,
      @ObjectModel.text.association: '_SrvcPartsInvtryPlngModeText'
      cast (inv_pln_mode as espp_inv_pln_mode_cds preserving type )         as SrvcPartsInvtryPlngMode,
      _Product,
      _SrvcPartsInvtryPlngModeText
}
```
