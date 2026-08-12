---
name: I_TRANSPDIMNWEIGHTPROFILE
description: "This CDS view is a basic view to retrieve the information of dimensional weight profiles of freight agreements. Dimensional weight profile is the factor that converts a product's gross volume into dimensional weight. The system then uses the dimensional weight to apply the correct rate when calculating charges. Dimensional weight, also known as volumetric rate, is a standard way of establishing a minimum charge for the cubic space a package occupies. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPDIMNWEIGHTPROFILE')/$value
semantic_en: "This CDS view is a basic view to retrieve the information of dimensional weight profiles of freight agreements. Dimensional weight profile is the factor that converts a product's gross volume into dimensional weight. The system then uses the dimensional weight to apply the correct rate when calculating charges. Dimensional weight, also known as volumetric rate, is a standard way of establishing a minimum charge for the cubic space a package occupies. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Transp Dimensional Weight Profile — CDS view cơ bản dựa trên Transp Dimensional Weight Profile."
keywords:
  - "transp"
  - "dimensional"
  - "weight"
  - "profile"
  - "dimn"
  - "transportation"
  - "calculation"
  - "base"
tags:
  - TM
  - bo:companycode
  - component:TM-MD-CM-2CL
  - interface-view
  - product
  - TM-MD
  - TM-MD-CM
  - TM-MD-CM-2CL
---
# I_TRANSPDIMNWEIGHTPROFILE

**This CDS view is a basic view to retrieve the information of dimensional weight profiles of freight agreements. Dimensional weight profile is the factor that converts a product's gross volume into dimensional weight. The system then uses the dimensional weight to apply the correct rate when calculating charges. Dimensional weight, also known as volumetric rate, is a standard way of establishing a minimum charge for the cubic space a package occupies. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPDIMNWEIGHTPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspDimnWeightProfile` | ✓ | |  | `id` | `CHAR(10)` | Dimensional Weight Profile |
| `TransportationCalculationBase` |  | |  | `calculation_base` | `CHAR(15)` | Calculation Base |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspDimnWgtProfileText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPDIMNWEIGHTPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPDIMNWEIGHTPROFILE')/$value)*

```abap
@EndUserText.label: 'Transp Dimensional Weight Profile'
@ObjectModel:   {representativeKey:        'TranspDimnWeightProfile',
                 usageType:                {serviceQuality: #A,
                                           sizeCategory:   #M,
                                           dataClass:      #CUSTOMIZING},
                 supportedCapabilities:  [ #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:                 #BASIC }
//                 lifecycle.contract.type: #NONE}
@AbapCatalog:   {sqlViewName:              'ITDIMWGTPROFL',
                 compiler:                 {compareFilter: true},
                 buffering:                {status: #ACTIVE,
                                            type:   #FULL}}
@AccessControl.authorizationCheck:         #NOT_REQUIRED
@ClientHandling.algorithm:                 #SESSION_VARIABLE
@Metadata:      {allowExtensions:          true,
                 ignorePropagatedAnnotations: true}

define view I_TranspDimnWeightProfile
  as select from /scmtms/c_dimwp
  association [0..*] to I_TranspDimnWgtProfileText as _Text on $projection.TranspDimnWeightProfile = _Text.TranspDimnWeightProfile
  //  association [0..1] to I_UnitOfMeasure            as _TranspDimnWtVolUnit on $projection.TranspDimnWeightVolUnit = _TranspDimnWtVolUnit.UnitOfMeasure
  //  association [0..1] to I_UnitOfMeasure            as _TranspDimnWtUnit    on $projection.TranspDimnWeightUnit = _TranspDimnWtUnit.UnitOfMeasure
{
      @ObjectModel.text.association: '_Text'
  key id               as TranspDimnWeightProfile,

      //      cast( factor       as abap.quan( 31 , 3 ))    as TransportationDimnWeightRate,
      //      @ObjectModel.foreignKey.association: '_TranspDimnWtVolUnit'
      //      @Semantics.unitOfMeasure: true
      //      volume_uom                                    as TranspDimnWeightVolUnit,
      //      @ObjectModel.foreignKey.association: '_TranspDimnWtUnit'
      //      @Semantics.unitOfMeasure: true
      //      weight_uom                                    as TranspDimnWeightUnit,

      calculation_base as TransportationCalculationBase,

      /*Associations*/
      _Text
      //      _TranspDimnWtVolUnit,
      //      _TranspDimnWtUnit
}
```
