---
name: I_PRODUCTFIELDATTRIBUTES
description: "Productfieldattributes"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTFIELDATTRIBUTES

**Productfieldattributes**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductFieldNameWithTable` | ✓ | |  | `fname` |  |  |
| `ProductFieldSelectionGroup` |  | |  | `fgrup` |  |  |
| `MaintenanceStatus` |  | |  | `pstat` |  |  |
| `ProdSpecialFieldSelectionGroup` |  | |  | `sfgru` |  |  |
| `FldCntntIsPrpsdFrmRefProduct` |  | |  | `case t130f_c.fname when t130f.fname then t130f_c.kzref else t130f.kzref end` |  |  |
| `FldCntntIsCopiedFrmRefProduct` |  | |  | `case t130f_c.fname when t130f.fname then t130f_c.kzcpy else t130f.kzcpy end` |  |  |
| `InitFldCntntIsPrpsdFrmRefProd` |  | |  | `case t130f_c.fname when t130f.fname then t130f_c.rfini else t130f.rfini end` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'IPRODFLDATTR',
  compiler.compareFilter: true,
  preserveKey: true
}

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Product Field Attributes'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel: {
  representativeKey: 'ProductFieldNameWithTable',
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SEARCHABLE_ENTITY

  ],
  usageType: {
    serviceQuality: #C,
    sizeCategory : #M,
    dataClass: #MIXED
    }
}
@VDM:{
  viewType: #BASIC
}

define view I_ProductFieldAttributes
  as select from           t130f   as t130f
    left outer to one join t130f_c as t130f_c on t130f.fname = t130f_c.fname
{
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
  key t130f.fname as ProductFieldNameWithTable,
      t130f.fgrup as ProductFieldSelectionGroup,
      t130f.pstat as MaintenanceStatus,
      t130f.sfgru as ProdSpecialFieldSelectionGroup,

      /*   Since Customer can influence T130F_C which will overwrite T130F entries
           Below mentioned CASE statement is written.
      */
      case t130f_c.fname
        when t130f.fname then
         t130f_c.kzref
        else
        t130f.kzref
      end         as FldCntntIsPrpsdFrmRefProduct,

      case t130f_c.fname
        when t130f.fname then
        t130f_c.kzcpy
        else
        t130f.kzcpy
        end       as FldCntntIsCopiedFrmRefProduct,

      case t130f_c.fname
        when t130f.fname then
        t130f_c.rfini
        else
        t130f.rfini
        end       as InitFldCntntIsPrpsdFrmRefProd

}
```
