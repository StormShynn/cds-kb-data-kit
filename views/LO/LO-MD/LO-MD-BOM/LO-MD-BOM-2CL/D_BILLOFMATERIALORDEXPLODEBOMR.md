---
name: D_BILLOFMATERIALORDEXPLODEBOMR
description: D Bill of MaterialORDEXPLODEBOMR
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - material
  - bill-of-material
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# D_BILLOFMATERIALORDEXPLODEBOMR

**D Bill of MaterialORDEXPLODEBOMR**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesOrder` |  | |  | `vbeln` |
| `SalesOrderItem` |  | |  | `cs_vbpos` |
| `BOMHdrRootMatlHierNode` |  | |  | `matnr` |
| `MaterialName` |  | |  | `maktx` |
| `BillOfMaterialRoot` |  | |  | `stnum` |
| `ParentBillOfMaterial` |  | |  | `cs_stlnr` |
| `BOMHeaderQuantityInBaseUnit` |  | |  | `basmn` |
| `BOMHeaderBaseUnit` |  | |  | `basme` |
| `BillOfMaterialRootVariant` |  | |  | `stlal` |
| `BillOfMaterialVariantUsage` |  | |  | `stlvw` |
| `HeaderValidityStartDate` |  | |  | `datuv` |
| `HeaderValidityEndDate` |  | |  | `datub` |
| `ChangeNumber` |  | |  | `aennr` |
| `BOMHdrMatlHierNode` |  | |  | `matnr` |
| `ProductionVersion` |  | |  | `verid` |
| `BOMAlternativeText` |  | |  | `stktx` |
| `ExplodeBOMLevelValue` |  | |  | `histu` |
| `PathToPredecessorBOMValue` |  | |  | `cs_e_vwegx` |
| `PathToBillOfMaterialValue` |  | |  | `wegxx` |
| `BillOfMaterialItemNumber` |  | |  | `sposn` |
| `NewBillOfMaterialItemNumber` |  | |  | `cs_sposn` |
| `BillOfMaterialVariant` |  | |  | `stlal` |
| `BillOfMaterial` |  | |  | `stnum` |
| `SuccessorBillOfMaterial` |  | |  | `cs_stlnr` |
| `BOMHdrEngChgDoc` |  | |  | `aennr` |
| `PlantName` |  | |  | `name1` |
| `BOMVersionStatusDescription` |  | |  | `ddtext` |
| `BillOfMaterialComponent` |  | |  | `idnrk` |
| `BillOfMaterialItemQuantity` |  | |  | `kmpmg` |
| `BillOfMaterialItemUnit` |  | |  | `meins` |
| `ComponentQuantityInCompUoM` |  | |  | `cs_e_mngko` |
| `ComponentQuantityInBaseUoM` |  | |  | `cs_e_mnglg` |
| `ComponentDescription` |  | |  | `ojtxp` |
| `MaterialType` |  | |  | `mtart` |
| `StandardPrice` |  | |  | `stprs` |
| `MRPType` |  | |  | `dismm` |
| `BOMSpecialProcurementType` |  | |  | `sobsl` |
| `FollowUpProduct` |  | |  | `nfmat` |
| `MaterialIsConfigurable` |  | |  | `kzkfg` |
| `RecordCreationDate` |  | |  | `andat` |
| `CreatedByUser` |  | |  | `annam` |
| `LastChangeDate` |  | |  | `aedat` |
| `LastChangedByUser` |  | |  | `aenam` |
| `BillOfMaterialItemCategory` |  | |  | `postp` |
| `IsMaterialProvision` |  | |  | `beikz` |
| `IsBOMItemSparePart` |  | |  | `erskz` |
| `IsCAD` |  | |  | `cadpo` |
| `PurchasingOrganization` |  | |  | `ekorg` |
| `PurchasingGroup` |  | |  | `ekgrp` |
| `Supplier` |  | |  | `lifnr` |
| `MaterialComponentPrice` |  | |  | `preis` |
| `MaterialPriceUnitQty` |  | |  | `cs_e_peinh` |
| `Currency` |  | |  | `waers` |
| `CostElement` |  | |  | `sakto` |
| `DocNumber` |  | |  | `doknr` |
| `DocumentType` |  | |  | `dokar` |
| `DocumentPart` |  | |  | `doktl_d` |
| `DocumentVersion` |  | |  | `dokvr` |
| `BOMItemDescription` |  | |  | `potx1` |
| `BOMItemText2` |  | |  | `potx2` |
| `MaterialGroup` |  | |  | `matkl` |
| `GoodsReceiptDurationInDays` |  | |  | `webaz` |
| `ValidityStartDate` |  | |  | `datuv` |
| `ValidityEndDate` |  | |  | `dtbis` |
| `IsPhantomItem` |  | |  | `dumps` |
| `ProdOrderIssueLocation` |  | |  | `lgpro` |
| `IsSoftwareComponent` |  | |  | `cs_sfwind` |
| `BOMItemIsDiscontinued` |  | |  | `kzaus` |
| `ChgToEngChgNumber` |  | |  | `aenra` |
| `DeliveryTimeInDays` |  | |  | `lifzt` |
| `MaterialCompIsAlternativeItem` |  | |  | `alpos` |
| `AlternativeItemGroup` |  | |  | `cs_alpgr` |
| `NextLevelCompIsAlternativeItem` |  | |  | `cs_e_xalst` |
| `IsClassificationRelevant` |  | |  | `cs_kzclb` |
| `IsAssembly` |  | |  | `stkkz` |
| `NextLevelBaseQuantity` |  | |  | `cs_e_xbmng` |
| `NextLevelBaseUnit` |  | |  | `cs_e_xbmen` |
| `NextLevelBillOfMaterialVariant` |  | |  | `cs_e_xstal` |
| `NextLevelBOMCategory` |  | |  | `cs_e_xstty` |
| `BillOfMaterialCategory` |  | |  | `stlty` |
| `NextLevelBillOfMaterial` |  | |  | `cs_e_xstnr` |
| `AssemblyBillOfMaterial` |  | |  | `cs_e_xstnr_1` |
| `NextLevelBOMUsage` |  | |  | `cs_e_xstan` |
| `Class` |  | |  | `klasse_d` |
| `ClassType` |  | |  | `klassenart` |
| `BOMClassificationNumber` |  | |  | `cs_clszu` |
| `NextLevelIsConfigurableBOM` |  | |  | `cs_e_xkbau` |
| `MaterialIsCoProduct` |  | |  | `kzkup` |
| `BOMItemInternalChangeCount` |  | |  | `cim_count` |
| `NextLevelHasDateHistory` |  | |  | `cs_e_xhsdt` |
| `DeletionIndicator` |  | |  | `cs_e_lkzch` |
| `DiscontinuationGroup` |  | |  | `cs_nfeag` |
| `DistributionKeyCompConsumption` |  | |  | `sa_verti` |
| `NextLevelItemIsDeleted` |  | |  | `cs_e_xlkzh` |
| `ExplosionType` |  | |  | `cs_dispo` |
| `BOMItemHasFixedQuantity` |  | |  | `fmnge` |
| `FollowUpGroup` |  | |  | `cs_nfgrp` |
| `MatlCompIsFollowUpMaterial` |  | |  | `cs_kznfp` |
| `FormulaKey` |  | |  | `rform` |
| `GoodsRecipientName` |  | |  | `wempf` |
| `BOMHasHeaderInfoRecord` |  | |  | `hdnfo` |
| `IntraMaterial` |  | |  | `intrm` |
| `ExternalIdentificationOfItem` |  | |  | `cs_itmid` |
| `LeadTimeOffset` |  | |  | `nlfzt` |
| `LongTextLanguage` |  | |  | `ltxsp` |
| `MaterialPurityPercent` |  | |  | `csstr` |
| `MultipleSelectionAllowed` |  | |  | `clmult` |
| `VariableSizeItemQuantity` |  | |  | `roanz` |
| `VariableSizeItemUnit` |  | |  | `roame` |
| `NmbrOfCompatibleUnitInstances` |  | |  | `/cum/cufactor` |
| `BillOfMaterialObjectType` |  | |  | `objty` |
| `ObjDpnAssignmentNumber` |  | |  | `knobj` |
| `OperationLeadTimeOffset` |  | |  | `cs_nlfzv` |
| `OperationLeadTimeOffsetUnit` |  | |  | `cs_nlfmv` |
| `ReinsurContrOrgUnit` |  | |  | `abteilung` |
| `AlternativeItemPriority` |  | |  | `cs_alprf` |
| `ProductionSupplyArea` |  | |  | `prvbe` |
| `QuantityVariableSizeItem` |  | |  | `romen` |
| `VariableSizeCompUnitOfMeasure` |  | |  | `rokme` |
| `ReferencePoint` |  | |  | `cn_rfpnt` |
| `RequiredComponent` |  | |  | `clobk` |
| `ScrapQuantityInBaseUoM` |  | |  | `cs_e_amglg` |
| `Size1` |  | |  | `roms1` |
| `Size2` |  | |  | `roms2` |
| `Size3` |  | |  | `roms3` |
| `UnitOfMeasureForSize1To3` |  | |  | `romei` |
| `BOMItemSpecialProcurementType` |  | |  | `cs_sobsl` |
| `SpecialProcurementType` |  | |  | `cs_sobmx` |
| `StorageLocation` |  | |  | `lgort_d` |
| `AlternativeItemStrategy` |  | |  | `cs_alpst` |
| `IsSubItem` |  | |  | `upskz` |
| `RowIndex` |  | |  | `sytabix` |
| `NextLevelHasTechStatusHistory` |  | |  | `cs_e_xhssr` |
| `UnitOfMeasure` |  | |  | `kmpme` |
| `UnloadingPointName` |  | |  | `ablad` |
| `UsageProbabilityPercent` |  | |  | `ewahr` |
| `NextLevelIsVariantDocStructure` |  | |  | `cs_e_xvrst` |
| `BOMItemSign` |  | |  | `cs_e_msign` |
| `BOMIsParamEffectivityRelevant` |  | |  | `cc_mteff` |
| `BOMItemAssyScrapPercent` |  | |  | `cs_e_ausss` |
| `BaseUnit` |  | |  | `meins` |
| `ProdnOrderIsBatchRequired` |  | |  | `kzech` |
| `MaterialIsIntBatchManaged` |  | |  | `xchar` |
| `IsBulkMaterial` |  | |  | `schgt` |
| `ComponentScrapPercent` |  | |  | `cs_e_ausch` |
| `CommodityCodeText` |  | |  | `stawn` |
| `ComponentScrapMaterialPercent` |  | |  | `cs_e_kausf` |
| `CompleteMaintStatus` |  | |  | `vpsta` |
| `MaterialVariantConfigNumber` |  | |  | `cs_e_mcuob` |
| `BOMIsConfiguredOnMultipleLvl` |  | |  | `nconf` |
| `CustomsPreference` |  | |  | `prefe` |
| `Denominator` |  | |  | `umren` |
| `ProductDocumentVersion` |  | |  | `dzeivr` |
| `ProductDocumentNumber` |  | |  | `dzeinr` |
| `ExternalDocumentStatus` |  | |  | `stabk` |
| `ProductDocumentType` |  | |  | `dzeiar` |
| `InspLotDocumentationIsRequired` |  | |  | `kzdkz` |
| `EffectiveOutDate` |  | |  | `ausdt` |
| `IsEngineeringRelevant` |  | |  | `sanko` |
| `BOMExceptionText` |  | |  | `excpt` |
| `IsFixedPriceCoProduct` |  | |  | `ck_fixprku` |
| `BOMItemIsHighLevelConfig` |  | |  | `sanvs` |
| `DependentRequirementsType` |  | |  | `sbdkz` |
| `ClfnObjectInternalID` |  | |  | `cuobj` |
| `IssuingPlant` |  | |  | `pswrk` |
| `BillOfMaterialItemNodeNumber` |  | |  | `stlkn` |
| `LowLevelCode` |  | |  | `disst` |
| `MaintenanceStatus` |  | |  | `pstat_d` |
| `MovingAveragePriceInCoCodeCrcy` |  | |  | `verpr` |
| `IsNetScrap` |  | |  | `netau` |
| `ProductDocumentPageCount` |  | |  | `blanz` |
| `Numerator` |  | |  | `umrez` |
| `ObjectDescription` |  | |  | `ojtxb` |
| `OperationScrapPercent` |  | |  | `avoau` |
| `ProductDocumentPageFormat` |  | |  | `dzeifo` |
| `ProductDocumentPageNumber` |  | |  | `blatt` |
| `Plant` |  | |  | `werks_d` |
| `BOMItemIsPlantMaintRelevant` |  | |  | `sanin` |
| `PlantSpecificMaterialStatus` |  | |  | `mmsta` |
| `ProductPriceControl` |  | |  | `vprsv` |
| `MatlCompIsProcuredExternally` |  | |  | `fbskz` |
| `BOMItemIsProductionRelevant` |  | |  | `sanfe` |
| `ProfitCenter` |  | |  | `prctr` |
| `IsBOMRecursiveAllowed` |  | |  | `rekrs` |
| `BOMIsRecursive` |  | |  | `rekri` |
| `BOMItemIsCostingRelevant` |  | |  | `ck_selkz` |
| `BOMItemIsSalesRelevant` |  | |  | `rvrel` |
| `RequirementSegment` |  | |  | `sgt_rcat` |
| `RevisionLevel` |  | |  | `revlv` |
| `MaterialRevisionLevel` |  | |  | `cs_revlv` |
| `SerialNumberProfile` |  | |  | `serail` |
| `BOMItemSorter` |  | |  | `sortp` |
| `CostingSpecialProcurementType` |  | |  | `ck_sobsl` |
| `DocumentStatusName` |  | |  | `dostx` |
| `StockSegment` |  | |  | `sgt_scat` |
| `EffectivityParameterVariant` |  | |  | `techv` |
| `ProductUnitOfMeasureUsage` |  | |  | `kzwso` |
| `PlantSpecificStatusValidFrmDte` |  | |  | `mmstd` |
| `CrossPlantStatusValidFromDte` |  | |  | `mstde` |
| `ValuationCategory` |  | |  | `bwtty_d` |
| `CrossPlantMaterialStatus` |  | |  | `mstae` |
| `BillOfMaterialVersion` |  | |  | `cs_versn` |
| `BOMVersionStatus` |  | |  | `cs_versnst` |
| `BillOfMaterialItemIndex` |  | |  | `sytabix` |

## Source Code

```abap
@EndUserText.label: 'Result for a Sales Order Bill of Material Explosion'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel: {
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
 }
define abstract entity D_BillOfMaterialOrdExplodeBOMR
{
  SalesOrder                     : vbeln;
  SalesOrderItem                 : cs_vbpos;
  BOMHdrRootMatlHierNode         : matnr;
  MaterialName                   : maktx;
  @API.element.releaseState      : #DEPRECATED
  @API.element.successor         : 'ParentBillOfMaterial'
  BillOfMaterialRoot             : stnum;
  ParentBillOfMaterial           : cs_stlnr;
  @EndUserText.label             : 'Base Unit for Header'
  @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
  @EndUserText.quickInfo         : 'Base Unit for Hdr'
  BOMHeaderQuantityInBaseUnit    : basmn;
  BOMHeaderBaseUnit              : basme;
  BillOfMaterialRootVariant      : stlal;
  BillOfMaterialVariantUsage     : stlvw;
  HeaderValidityStartDate        : datuv;
  HeaderValidityEndDate          : datub;
  ChangeNumber                   : aennr;
  BOMHdrMatlHierNode             : matnr;
  ProductionVersion              : verid;
  BOMAlternativeText             : stktx;
  ExplodeBOMLevelValue           : histu;
  PathToPredecessorBOMValue      : cs_e_vwegx;
  PathToBillOfMaterialValue      : wegxx;
  @API.element.releaseState      : #DEPRECATED
  @API.element.successor         : 'NewBillOfMaterialItemNumber'
  BillOfMaterialItemNumber       : sposn;
  NewBillOfMaterialItemNumber    : cs_sposn;
  BillOfMaterialVariant          : stlal;
  @API.element.releaseState      : #DEPRECATED
  @API.element.successor         : 'SuccessorBillOfMaterial'
  BillOfMaterial                 : stnum;
  SuccessorBillOfMaterial        : cs_stlnr;
  BOMHdrEngChgDoc                : aennr;
  PlantName                      : name1;
  BOMVersionStatusDescription    : ddtext;
  BillOfMaterialComponent        : idnrk;
  @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
  BillOfMaterialItemQuantity     : kmpmg;
  BillOfMaterialItemUnit         : meins;
  @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
  ComponentQuantityInCompUoM     : cs_e_mngko;
  @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
  ComponentQuantityInBaseUoM     : cs_e_mnglg;
  ComponentDescription           : ojtxp;
  MaterialType                   : mtart;
  // @Semantics.: 'price_unit'
  @Semantics.amount.currencyCode : 'currency'
  StandardPrice                  : stprs;
  MRPType                        : dismm;
  BOMSpecialProcurementType      : sobsl;
  FollowUpProduct                : nfmat;
  MaterialIsConfigurable         : kzkfg;
  RecordCreationDate             : andat;
  CreatedByUser                  : annam;
  LastChangeDate                 : aedat;
  LastChangedByUser              : aenam;
  BillOfMaterialItemCategory     : postp;

  IsMaterialProvision            : beikz;
  IsBOMItemSparePart             : erskz;
  IsCAD                          : cadpo;
  PurchasingOrganization         : ekorg;
  PurchasingGroup                : ekgrp;
  Supplier                       : lifnr;
  // @Semantics.quantity.unitOfMeasure: 'price_unit'
  @Semantics.amount.currencyCode : 'currency'
  MaterialComponentPrice         : preis;
  MaterialPriceUnitQty           : cs_e_peinh;
  Currency                       : waers;
  CostElement                    : sakto;
  DocNumber                      : doknr;
  DocumentType                   : dokar;
  DocumentPart                   : doktl_d;
  DocumentVersion                : dokvr;
  BOMItemDescription             : potx1;
  BOMItemText2                   : potx2;
  MaterialGroup                  : matkl;
  GoodsReceiptDurationInDays     : webaz;
  ValidityStartDate              : datuv;
  ValidityEndDate                : dtbis;
  IsPhantomItem                  : dumps;
  ProdOrderIssueLocation         : lgpro;
  IsSoftwareComponent            : cs_sfwind;
  BOMItemIsDiscontinued          : kzaus;
  ChgToEngChgNumber              : aenra;
  DeliveryTimeInDays             : lifzt;
  MaterialCompIsAlternativeItem  : alpos;
  AlternativeItemGroup           : cs_alpgr;
  NextLevelCompIsAlternativeItem : cs_e_xalst;
  IsClassificationRelevant       : cs_kzclb;
  IsAssembly                     : stkkz;
  @Semantics.quantity.unitOfMeasure: 'NextLevelBaseUnit'
  NextLevelBaseQuantity          : cs_e_xbmng;
  NextLevelBaseUnit              : cs_e_xbmen;
  NextLevelBillOfMaterialVariant : cs_e_xstal;
  NextLevelBOMCategory           : cs_e_xstty;
  BillOfMaterialCategory         : stlty;
  @API.element.releaseState      : #DEPRECATED
  @API.element.successor         : 'AssemblyBillOfMaterial'
  NextLevelBillOfMaterial        : cs_e_xstnr;
  AssemblyBillOfMaterial         : cs_e_xstnr_1;
  NextLevelBOMUsage              : cs_e_xstan;
  Class                          : klasse_d;
  ClassType                      : klassenart;
  BOMClassificationNumber        : cs_clszu;
  NextLevelIsConfigurableBOM     : cs_e_xkbau;
  MaterialIsCoProduct            : kzkup;
  BOMItemInternalChangeCount     : cim_count;
  NextLevelHasDateHistory        : cs_e_xhsdt;
  DeletionIndicator              : cs_e_lkzch;
  DiscontinuationGroup           : cs_nfeag;
  DistributionKeyCompConsumption : sa_verti;
  NextLevelItemIsDeleted         : cs_e_xlkzh;
  ExplosionType                  : cs_dispo;
  BOMItemHasFixedQuantity        : fmnge;
  FollowUpGroup                  : cs_nfgrp;
  MatlCompIsFollowUpMaterial     : cs_kznfp;
  FormulaKey                     : rform;
  GoodsRecipientName             : wempf;
  BOMHasHeaderInfoRecord         : hdnfo;
  IntraMaterial                  : intrm;
  ExternalIdentificationOfItem   : cs_itmid;
  LeadTimeOffset                 : nlfzt;
  LongTextLanguage               : ltxsp;
  MaterialPurityPercent          : csstr;
  MultipleSelectionAllowed       : clmult;
  @Semantics.quantity.unitOfMeasure: 'VariableSizeItemUnit'
  VariableSizeItemQuantity       : roanz;
  VariableSizeItemUnit           : roame;
  NmbrOfCompatibleUnitInstances  : /cum/cufactor;
  BillOfMaterialObjectType       : objty;
  ObjDpnAssignmentNumber         : knobj;
  OperationLeadTimeOffset        : cs_nlfzv;
  OperationLeadTimeOffsetUnit    : cs_nlfmv;
  ReinsurContrOrgUnit            : abteilung;
  AlternativeItemPriority        : cs_alprf;
  ProductionSupplyArea           : prvbe;
  @Semantics.quantity.unitOfMeasure: 'VariableSizeCompUnitOfMeasure'
  QuantityVariableSizeItem       : romen;
  VariableSizeCompUnitOfMeasure  : rokme;
  ReferencePoint                 : cn_rfpnt;
  RequiredComponent              : clobk;
  @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
  ScrapQuantityInBaseUoM         : cs_e_amglg;
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureForSize1To3'
  Size1                          : roms1;
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureForSize1To3'
  Size2                          : roms2;
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureForSize1To3'
  Size3                          : roms3;
  UnitOfMeasureForSize1To3       : romei;
  BOMItemSpecialProcurementType  : cs_sobsl;
  SpecialProcurementType         : cs_sobmx;
  StorageLocation                : lgort_d;
  AlternativeItemStrategy        : cs_alpst;
  IsSubItem                      : upskz;
  RowIndex                       : sytabix;
  NextLevelHasTechStatusHistory  : cs_e_xhssr;
  //    totals_record_id: sumkz;
  UnitOfMeasure                  : kmpme;
  UnloadingPointName             : ablad;
  UsageProbabilityPercent        : ewahr;
  NextLevelIsVariantDocStructure : cs_e_xvrst;
  BOMItemSign                    : cs_e_msign;
  BOMIsParamEffectivityRelevant  : cc_mteff;
  BOMItemAssyScrapPercent        : cs_e_ausss;
  BaseUnit                       : meins;
  ProdnOrderIsBatchRequired      : kzech;
  MaterialIsIntBatchManaged      : xchar;
  IsBulkMaterial                 : schgt;
  ComponentScrapPercent          : cs_e_ausch;
  CommodityCodeText              : stawn;
  ComponentScrapMaterialPercent  : cs_e_kausf;
  CompleteMaintStatus            : vpsta;
  MaterialVariantConfigNumber    : cs_e_mcuob;
  BOMIsConfiguredOnMultipleLvl   : nconf;
  CustomsPreference              : prefe;
  Denominator                    : umren;
  ProductDocumentVersion         : dzeivr;
  ProductDocumentNumber          : dzeinr;
  ExternalDocumentStatus         : stabk;
  ProductDocumentType            : dzeiar;
  InspLotDocumentationIsRequired : kzdkz;
  EffectiveOutDate               : ausdt;
  IsEngineeringRelevant          : sanko;
  BOMExceptionText               : excpt;
  IsFixedPriceCoProduct          : ck_fixprku;
  BOMItemIsHighLevelConfig       : sanvs;
  DependentRequirementsType      : sbdkz;
  ClfnObjectInternalID           : cuobj;
  IssuingPlant                   : pswrk;
  BillOfMaterialItemNodeNumber   : stlkn;
  LowLevelCode                   : disst;
  MaintenanceStatus              : pstat_d;
  //    @Semantics.quantity.unitOfMeasure: 'price_unit'
  @Semantics.amount.currencyCode : 'currency'
  MovingAveragePriceInCoCodeCrcy : verpr;
  IsNetScrap                     : netau;
  ProductDocumentPageCount       : blanz;
  Numerator                      : umrez;
  ObjectDescription              : ojtxb;
  OperationScrapPercent          : avoau;
  ProductDocumentPageFormat      : dzeifo;
  ProductDocumentPageNumber      : blatt;
  Plant                          : werks_d;
  BOMItemIsPlantMaintRelevant    : sanin;
  PlantSpecificMaterialStatus    : mmsta;
  ProductPriceControl            : vprsv;
  MatlCompIsProcuredExternally   : fbskz;
  BOMItemIsProductionRelevant    : sanfe;
  ProfitCenter                   : prctr;
  IsBOMRecursiveAllowed          : rekrs;
  BOMIsRecursive                 : rekri;
  BOMItemIsCostingRelevant       : ck_selkz;
  BOMItemIsSalesRelevant         : rvrel;
  RequirementSegment             : sgt_rcat;
  @API.element.releaseState      : #DEPRECATED
  @API.element.successor         : 'MaterialRevisionLevel'
  RevisionLevel                  : revlv;
  MaterialRevisionLevel          : cs_revlv;
  SerialNumberProfile            : serail;
  BOMItemSorter                  : sortp;
  CostingSpecialProcurementType  : ck_sobsl;
  DocumentStatusName             : dostx;
  StockSegment                   : sgt_scat;
  EffectivityParameterVariant    : techv;
  ProductUnitOfMeasureUsage      : kzwso;
  PlantSpecificStatusValidFrmDte : mmstd;
  CrossPlantStatusValidFromDte   : mstde;
  ValuationCategory              : bwtty_d;
  CrossPlantMaterialStatus       : mstae;
  BillOfMaterialVersion          : cs_versn;
  BOMVersionStatus               : cs_versnst;
  BillOfMaterialItemIndex        : sytabix;


}
```
