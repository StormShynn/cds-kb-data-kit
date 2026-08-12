---
name: I_PACKINGINSTRUCTIONCOMPONENT
description: "Packinginstructioncomponent"
app_component: LO-HU-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-HU
  - interface-view
  - component:LO-HU-2CL
  - lob:Logistics General
---
# I_PACKINGINSTRUCTIONCOMPONENT

**Packinginstructioncomponent**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PackingInstructionItemSystUUID` | ✓ | |  | `cast( packitemid as packing_instruction_component preserving type )` |  |  |
| `PackingInstructionSystemUUID` |  | |  | `cast( packnr as packing_instruction_number preserving type )` |  |  |
| `PackingInstructionItem` |  | |  | `packitem` |  |  |
| `PackingInstructionItemCategory` |  | |  | `paitemtype` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `ItemPackingInstructionSystUUID` |  | |  | `subpacknr` |  |  |
| `PackingInstructionItmTargetQty` |  | |  | `trgqty` |  |  |
| `PackingInstructionItemMinQty` |  | |  | `minqty` |  |  |
| `PackingInstructionItemRndQty` |  | |  | `rndqty` |  |  |
| `BaseUnitofMeasure` |  | |  | `baseunit` |  |  |
| `UnitOfMeasure` |  | |  | `unitqty` |  |  |
| `MaterialMixIsAllowed` |  | |  | `matmixawd` |  |  |
| `BatchMixIsAllowed` |  | |  | `indchmix` |  |  |
| `MaterialIsNotHandlingUnitRel` |  | |  | `indnohu` |  |  |
| `PackingInstructionItemIsDel` |  | |  | `inddel` |  |  |
| `_PackingInstructionHeader` | | ✓ | | | | |
| `_BaseUnitofMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PackingInstructionHeader` | `I_PackingInstructionHeader` | [1..1] |
| `_BaseUnitofMeasure` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPACKINSTCOMP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Packing Instruction Component'
@Search.searchable: true

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@ObjectModel: {
   usageType: {
     serviceQuality:  #B,
     dataClass:       #MIXED,
     sizeCategory:    #L
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
   modelingPattern: #NONE
}

@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } Key field ITCOUNT not used */
define view I_PackingInstructionComponent
  as select from packpo
  association [1..1] to I_PackingInstructionHeader as _PackingInstructionHeader on $projection.PackingInstructionSystemUUID = _PackingInstructionHeader.PackingInstructionSystemUUID
  association [0..1] to I_UnitOfMeasure             as _BaseUnitofMeasure on _BaseUnitofMeasure.UnitOfMeasure = $projection.BaseUnitofMeasure
 
{
       @Semantics.uuid:true
  key cast( packitemid as packing_instruction_component preserving type ) as PackingInstructionItemSystUUID,
      //  key itcount as Counter,
      @Semantics.uuid:true
      cast( packnr as packing_instruction_number preserving type ) as PackingInstructionSystemUUID,
      /* annotations at element level */
      @EndUserText.label: 'Item Number'
      packitem                                                     as PackingInstructionItem,
      @Search.defaultSearchElement : true    
      @Search.fuzzinessThreshold : 0.8        
      @Search.ranking : #HIGH      
      @EndUserText.label: 'Packing Object Item Category'
      paitemtype                                                   as PackingInstructionItemCategory,
      @EndUserText.label: 'Material'
      matnr                                                        as Material,
      @Search.fuzzinessThreshold : 0.8        
      @Search.ranking : #MEDIUM   
      @EndUserText.label: 'Sub Packing Instruction Number'  
      subpacknr                                                    as ItemPackingInstructionSystUUID,
      @Semantics.quantity.unitOfMeasure: 'BaseUnitofMeasure'/*UnitOfMeasure*/
      @EndUserText.label: 'Target Quantity'
      trgqty                                                       as PackingInstructionItmTargetQty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnitofMeasure'/*UnitOfMeasure*/
      @EndUserText.label: 'Minimum Quantity'
      minqty                                                       as PackingInstructionItemMinQty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnitofMeasure' /*UnitOfMeasure this field is connected to T006 table for input help  */ 
      @EndUserText.label: 'Rounding Quantity'
      rndqty                                                       as PackingInstructionItemRndQty,
      baseunit                                                     as BaseUnitofMeasure,
      @EndUserText.label: 'Unit of Measure'
      unitqty                                                      as UnitOfMeasure,
      @Semantics.booleanIndicator: true
      matmixawd                                                    as MaterialMixIsAllowed,
      indchmix                                                     as BatchMixIsAllowed,
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Not Relevant for HU'
      indnohu                                                      as MaterialIsNotHandlingUnitRel,
      inddel                                                       as PackingInstructionItemIsDel,
//      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _PackingInstructionHeader,
      _BaseUnitofMeasure
}
```
