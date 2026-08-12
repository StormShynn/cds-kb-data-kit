---
name: I_COLLATERALREALESTATEPART
description: "Part Details for Collateral Real Estate"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEPART')/$value
semantic_en: "Part Details for Collateral Real Estate"
semantic_vi: "Part Details for Collateral Real Estate — CDS view giao diện dựa trên P_RealEstatePrt_TF."
keywords:
  - "part"
  - "details"
  - "for"
  - "collateral"
  - "real"
  - "estate"
  - "colltrl"
  - "converted"
  - "building"
  - "type"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALREALESTATEPART

**Part Details for Collateral Real Estate**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEPART')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRealEstatePartUUID` | ✓ | |  | `obj_prt_guid` | `RAW(16)` | GUID for Object part |
| `ColltrlREPartConvertedID` |  | |  | `obj_prt_guid_conv` | `CHAR(40)` | Reference ID for the object |
| `CollateralRealEstateUUID` |  | |  | `obj_guid` | `RAW(16)` | GUID for Real Estate Object |
| `CollateralRealEstatePartID` |  | |  | `part_id` | `NUMC(10)` | Part ID for the Object |
| `ColltrlREBuildingPartType` |  | |  | `bld_part_type` | `CHAR(6)` | Building Part Type |
| `ColltrlRealEstatePartCondition` |  | |  | `part_cond` | `CHAR(6)` | Object condition |
| `ColltrlREMainUsageType` |  | |  | `main_usage` | `CHAR(6)` | Usage Type |
| `ColltrlREAdditionalUsageType1` |  | |  | `add_usage_1` | `CHAR(6)` | Additional Usage 1 |
| `ColltrlREAdditionalUsageType2` |  | |  | `add_usage_2` | `CHAR(6)` | Additional Usage 2 |
| `ColltrlREBuildingMethodRoof` |  | |  | `bld_method_roof` | `CHAR(6)` | Building method - Roof |
| `ColltrlREBuildingMethodBody` |  | |  | `bld_method_body` | `CHAR(6)` | Building method - Body |
| `ColltrlREBuildingMethodCellar` |  | |  | `bld_metd_cellar` | `CHAR(6)` | Building method - Cellar |
| `ColltrlRealEstateUtilization` |  | |  | `utilization` | `CHAR(6)` | Utilization of the Object |
| `ColltrlREPartDescription` |  | |  | `part_desc` | `CHAR(30)` | Description of Building Part |
| `ColltrlRECommlUsagePercent` |  | |  | `comm_usage_pct` | `DEC(10)` | Commercial Usage as a Percentage of Total Usage |
| `ColltrlREIsOtherUsagePossible` |  | |  | `other_usg_flg` | `CHAR(1)` | Indicates if Usages in addition to Main Usage are Possible |
| `ColltrlREReferencePartUUID` |  | |  | `ref_obj_prt_guid` | `RAW(16)` | Reference Object Part GUID |
| `ColltrlREIsSubAssetCreated` |  | |  | `is_sub_ast_crea` | `CHAR(1)` | Indicates whether a Sub-asset is created for Building Part |
| `ColltrlREUsableAreaSize` |  | |  | `useful_area` | `QUAN(13)` | Usable Area |
| `ColltrlREUsblAreaUoM` |  | |  | `usbl_area_uom` | `UNIT(3)` | Unit of Measure for Usable Area |
| `ColltrlRERentedUsableAreaSize` |  | |  | `useful_area_ren` | `QUAN(13)` | Rented Usable Area |
| `ColltrlRERntdUsblAreaUoM` |  | |  | `usbl_ar_ren_uom` | `UNIT(3)` | Unit of Measure for Usable Rented Area |
| `ColltrlRealEstateUsableVolume` |  | |  | `useful_vol` | `QUAN(13)` | Usable Volume of Real Estate Building Parts |
| `ColltrlREUsblVolumeUoM` |  | |  | `usbl_vol_uom` | `UNIT(3)` | Unit of Measure for Usable Volume of Real Estate |
| `ColltrlRERentedUsableVolume` |  | |  | `useful_vol_ren` | `QUAN(13)` | Usable Volume of the Rented Portions of Real Estate |
| `ColltrlRERntdUsblVolumeUoM` |  | |  | `usbl_vl_ren_uom` | `UNIT(3)` | Unit of measure for usable volume of Rented Parts |
| `ColltrlREResidentialAreaSize` |  | |  | `residential_area` | `QUAN(13)` | Residential Area |
| `ColltrlRERsdntlAreaUoM` |  | |  | `res_ar_uom` | `UNIT(3)` | Unit of Measure for Residential Area |
| `ColltrlRESecondaryAreaSize` |  | |  | `secondary_area` | `QUAN(13)` | Secondary Area |
| `ColltrlRESecdryAreaUoM` |  | |  | `sec_area_uom` | `UNIT(3)` | Unit of Measure for Secondary Area |
| `ColltrlREOtherAreaSize` |  | |  | `other_area` | `QUAN(13)` | Other Area |
| `ColltrlREOthAreaUnitOfMeasure` |  | |  | `oth_area_uom` | `UNIT(3)` | Unit of Measure for Other Area |
| `ColltrlRENumberOfBuildingPart` |  | |  | `no_prt_unit` | `INT4(10)` | Number of building part units |
| `ColltrlRENmbrOfBldngPartRented` |  | |  | `no_prt_unit_ren` | `INT4(10)` | Number of building part units rented |
| `ColltrlREConstructionStartDate` |  | |  | `cons_start_date` | `DATS(8)` | Start Date of Construction |
| `ColltrlREPermissionAppliedDate` |  | |  | `permsn_appl_date` | `DATS(8)` | Building Permssion applied date |
| `ColltrlREPrmssnObtainedDate` |  | |  | `permsn_obtd_date` | `DATS(8)` | Building Permssion obtained date |
| `ColltrlRealEstateOccupancyDate` |  | |  | `occy_date` | `DATS(8)` | Occupancy Date |
| `ColltrlRECompletionDate` |  | |  | `comp_date` | `DATS(8)` | Completion Date |
| `ColltrlREFinalInspectionDate` |  | |  | `final_insp_date` | `DATS(8)` | Date of Final Inspection |
| `ColltrlRERsdntlPlndRentAmount` |  | |  | `rent_amt_planned` | `CURR(17)` | Planned Rent Amount |
| `ColltrlRERsdntlActlRentAmount` |  | |  | `rent_amt_actual` | `CURR(17)` | Actual Rent Amount |
| `ColltrlRERsdntlPlndRentCrcy` |  | |  | `rent_plan_curr` | `CUKY(5)` | Planned Rent Currency |
| `ColltrlRERsdntlActlRentCrcy` |  | |  | `rent_act_curr` | `CUKY(5)` | Actual Rent Currency |
| `ColltrlREResidentialBasePeriod` |  | |  | `base_period` | `CHAR(1)` | Base period for the rent |
| `ColltrlRERsdntlBaseMeasure` |  | |  | `base_measure` | `CHAR(1)` | Base Measure |
| `ColltrlRERsdntlVacancyPercent` |  | |  | `vacant_posn_pct` | `DEC(10)` | Ratio of Real Estate not rented to Total Real Estate Value |
| `ColltrlREResidentialRentType` |  | |  | `res_rent_ind` | `CHAR(1)` | Indicator for Net or Gross Rent |
| `ColltrlRERsdntlComparRentAmt` |  | |  | `comp_rent_res` | `CURR(17)` | Comparative Rent  (Residential) |
| `ColltrlRERsdntlComparRentCrcy` |  | |  | `com_ren_res_curr` | `CUKY(5)` | Comparative Rent Currency - Residential |
| `ColltrlRealEstateLandAreaSize` |  | |  | `land_area` | `QUAN(13)` | Land Area of the Real Estate |
| `ColltrlRELandAreaUnitOfMeasure` |  | |  | `land_area_uom` | `UNIT(3)` | Unit of Measure of Land Area |
| `ColltrlRERentedLandAreaSize` |  | |  | `land_area_ren` | `QUAN(13)` | Land Area of the Real Estate which is Rented |
| `ColltrlRERntdLandAreaUoM` |  | |  | `land_ar_ren_uom` | `UNIT(3)` | Land area unit of measure(rented) |
| `ColltrlRealEstateNumberOfUnits` |  | |  | `no_of_units` | `INT4(10)` | No of units in real estate object |
| `ColltrlRENumberOfFloors` |  | |  | `no_of_floors` | `INT4(10)` | Number of Floors |
| `ColltrlRENumberOfGarages` |  | |  | `no_garages` | `INT4(10)` | No of Garages in Real Estate Object |
| `ColltrlRENumberOfGaragesRented` |  | |  | `no_garages_ren` | `INT4(10)` | No of Garages Rented in Real Estate Object |
| `ColltrlRENumberOfParking` |  | |  | `no_park_unit` | `INT4(10)` | Number of Parking Units |
| `ColltrlRENumberOfParkingRented` |  | |  | `no_park_unit_ren` | `INT4(10)` | Number of Parking Units Rented |
| `ColltrlRENmbrOfUndrGrndParking` |  | |  | `no_park_ug` | `INT4(10)` | Number of Underground Parking Units |
| `ColltrlRENrOfUndrGrndPrkngRntd` |  | |  | `no_park_ug_ren` | `INT4(10)` | Number of Rented Underground Parking Units |
| `ColltrlRENumberOfCurrentUnits` |  | |  | `no_cur_units` | `INT4(10)` | No of current units in real estate object |
| `ColltrlRENmbrOfCurUnitsRented` |  | |  | `no_cur_units_ren` | `INT4(10)` | No of Current Units Rented in Real Estate Object |
| `ColltrlRENumberOfOldUnits` |  | |  | `no_old_units` | `INT4(10)` | No of old units in real estate object |
| `ColltrlRENmbrOfOldUnitsRented` |  | |  | `no_old_units_ren` | `INT4(10)` | No of Old Units Rented in Real Estate Object |
| `ColltrlRENumberOfNewUnits` |  | |  | `no_new_units` | `INT4(10)` | No of new units in real estate object |
| `ColltrlRENmbrOfNewUnitsRented` |  | |  | `no_new_units_ren` | `INT4(10)` | No of New units Rented in Real Estate Object |
| `ColltrlRENrOfAccessStructures` |  | |  | `no_access_str` | `INT4(10)` | No of Access Structures |
| `ColltrlRENumberOfSaleLevel` |  | |  | `no_sale_level` | `INT4(10)` | No of Sale levels in commercial building |
| `ColltrlRealEstateNumberOfRooms` |  | |  | `no_of_rooms` | `INT4(10)` | No of rooms in the hotel/clinic |
| `ColltrlRealEstateNumberOfBeds` |  | |  | `no_of_beds` | `INT4(10)` | No of beds in the clinic/nursing home |
| `ColltrlRECommlEnvrmtDesc` |  | |  | `comm_env_desc` | `CHAR(30)` | Description of the commercial environment |
| `ColltrlREAccStrucDescription` |  | |  | `access_str_desc` | `CHAR(30)` | Description of the Access Structures |
| `ColltrlREBldngSctnDescription` |  | |  | `bld_section_desc` | `CHAR(6)` | Building Section |
| `ColltrlRealEstatePriceCategory` |  | |  | `price_category` | `CHAR(6)` | Price Category |
| `ColltrlREDailyAvgPriceAmount` |  | |  | `avg_price` | `CURR(17)` | Average Price per Day |
| `ColltrlREDailyAvgPriceCurrency` |  | |  | `avg_price_curr` | `CUKY(5)` | Average Price Currency |
| `ColltrlREOccupancyPercent` |  | |  | `occupancy_pct` | `DEC(10)` | Occupancy specified in Percentage Terms |
| `ColltrlRETurnoverAmount` |  | |  | `turnover_amt` | `CURR(17)` | Total Amount of Turnover |
| `ColltrlRETurnoverCurrency` |  | |  | `turnover_curr` | `CUKY(5)` | Currency |
| `ColltrlRERentalAgreementType` |  | |  | `rental_agmt_typ` | `CHAR(6)` | Rental Agreement Type |
| `ColltrlRECnstrctnLastRptDate` |  | |  | `last_report_date` | `DATS(8)` | Date of Last Constuction Report |
| `ColltrlREBldngProgressAmount` |  | |  | `bld_progress_amt` | `CURR(17)` | Amount Disbursed for Construction based on Building Progress |
| `ColltrlREBldngProgressCurrency` |  | |  | `bld_amt_curr` | `CUKY(5)` | Building Progress Amount Curreny |
| `ColltrlREBldngCompltnPercent` |  | |  | `pct_completed` | `DEC(10)` | Degree of Completion of Construction |
| `ColltrlRealEstateInsuranceType` |  | |  | `insurance_type` | `CHAR(6)` | Insurance Type |
| `ColltrlREInsuranceAmount` |  | |  | `insurance_amt` | `CURR(17)` | Insurance Amount |
| `ColltrlREInsuranceCurrency` |  | |  | `insurance_curr` | `CUKY(5)` | Insurance Currency |
| `ColltrlREInsuranceValidToDate` |  | |  | `ins_validity` | `DATS(8)` | Date until which the Insurance Stands Valid |
| `ColltrlRERsdntlRatnCostAmount` |  | |  | `rationing_cost` | `CURR(17)` | Residential Rationing Cost |
| `ColltrlRERsdntlRatnCostPercent` |  | |  | `rtn_cst_pct` | `DEC(10)` | Percentage of Residential Rationing Cost |
| `ColltrlREExtLayoutCostAmount` |  | |  | `ext_layout_cost` | `CURR(17)` | External Layout Cost |
| `ColltrlREExtLayoutCostPercent` |  | |  | `ext_lay_cst_pct` | `DEC(10)` | External Layout Cost as Percentage of Total Cost |
| `ColltrlRERsdntlRatnCostCrcy` |  | |  | `rtn_cst_curr` | `CUKY(5)` | Rationing cost currency |
| `ColltrlREExtLayoutCostCurrency` |  | |  | `ext_rtn_cst_curr` | `CUKY(5)` | External Layout cost currency |
| `ColltrlRECommlRationCostAmount` |  | |  | `rtn_cst_com` | `CURR(17)` | Commercial Rationing Cost |
| `ColltrlRECommlRatnCostCurrency` |  | |  | `rtn_cst_com_curr` | `CUKY(5)` | Rationing cost currency |
| `ColltrlRECommlRatnCostPercent` |  | |  | `rtn_cst_com_pct` | `DEC(10)` | Percentage of Commercial Rationing Cost |
| `ColltrlREGrossColdRentAmount` |  | |  | `gross_cold_rent` | `CURR(17)` | Gross Cold Rent |
| `ColltrlREGrossColdRentCurrency` |  | |  | `gross_rent_curr` | `CUKY(5)` | Gross Cold Rent Currency |
| `ColltrlRENetColdRentAmount` |  | |  | `net_cold_rent` | `CURR(17)` | Net Cold Rent |
| `ColltrlRENetColdRentCurrency` |  | |  | `net_rent_curr` | `CUKY(5)` | Net Cold Rent Currency |
| `CollateralRealEstateEnteredBy` |  | |  | `created_by` | `CHAR(12)` | Real Estate Add-On User |
| `ColltrlRealEstateEnteredDate` |  | |  | `created_date` | `DATS(8)` | Created On |
| `ColltrlRealEstateEnteredTime` |  | |  | `created_time` | `TIMS(6)` | Created At |
| `ColltrlRealEstateEnteredSource` |  | |  | `entry_src` | `CHAR(32)` | Sorce of Initial entry |
| `ColltrlRealEstateLastChangedBy` |  | |  | `last_chg_by` | `CHAR(12)` | Last Changed By |
| `ColltrlRELastChangedDate` |  | |  | `last_chg_date` | `DATS(8)` | Last Changed On |
| `ColltrlRELastChangedTime` |  | |  | `last_chg_time` | `TIMS(6)` | Last Changed At |
| `ColltrlRELastChangedSource` |  | |  | `processing_src` | `CHAR(32)` | Processing Source |
| `ColRECommlNmbrOfYrsLastValn` |  | |  | `no_of_years_com` | `INT1(3)` | No of  years since Last Valuation of Commercial Real Estate |
| `ColltrlRECommlValnInterestRate` |  | |  | `int_rate_com` | `DEC(10)` | Interest rate (Com) |
| `ColltrlRERsdntlLastValnNrOfYrs` |  | |  | `no_of_years` | `INT1(3)` | No. of Years since Real Estate was last Valued |
| `ColltrlRERsdntlValnIntrstRate` |  | |  | `int_rate` | `DEC(10)` | Interest rate used in Valuation of Residential Real Estate |
| `ColltrlRECommlPlndRentAmount` |  | |  | `rent_planned_com` | `CURR(17)` | Planned Rent Amount |
| `ColltrlRECommlActualRentAmount` |  | |  | `rent_actual_com` | `CURR(17)` | Actual Rent Amount |
| `ColltrlRECommlPlndRentCurrency` |  | |  | `plan_curr_com` | `CUKY(5)` | Planned Rent Currency |
| `ColltrlRECommlActlRentCurrency` |  | |  | `act_curr_com` | `CUKY(5)` | Actual Rent Currency |
| `ColltrlRECommercialBasePeriod` |  | |  | `base_period_com` | `CHAR(1)` | Base period for the rent |
| `ColltrlRECommercialBaseMeasure` |  | |  | `base_meas_com` | `CHAR(1)` | Base Measure |
| `ColltrlRECommercialRentType` |  | |  | `com_rent_ind` | `CHAR(1)` | Indicator for Rent Type |
| `ColltrlRECommlComparRentAmount` |  | |  | `comp_rent_com` | `CURR(17)` | Comparative Rent  (Commercial) |
| `ColltrlRECommlComparRentCrcy` |  | |  | `comp_ren_com_cur` | `CUKY(5)` | Comparative Rent Currency (Commercial) |
| `ColltrlRELandPlannedRentAmount` |  | |  | `plan_rent_land` | `CURR(17)` | Planned Rent Amount |
| `ColltrlRELandActualRentAmount` |  | |  | `actual_rent_land` | `CURR(17)` | Actual Rent Amount |
| `ColltrlRELandPlndRentCurrency` |  | |  | `plan_rent_curr` | `CUKY(5)` | Planned Rent Currency |
| `ColltrlRELandActlRentCurrency` |  | |  | `actual_rent_curr` | `CUKY(5)` | Actual Rent Currency |
| `ColltrlRELandRentBasePeriod` |  | |  | `base_period_land` | `CHAR(1)` | Base period for the rent |
| `ColltrlRELandRentBaseMeasure` |  | |  | `base_meas_land` | `CHAR(1)` | Base Measure |
| `ColltrlREDepreciationPercent` |  | |  | `depr` | `DEC(10)` | Depriciation |
| `ColltrlRELandCostAmount` |  | |  | `land_cost` | `CURR(17)` | Land Cost Amount |
| `ColltrlRELandCostCurrency` |  | |  | `land_cost_curr` | `CUKY(5)` | Land Cost Currency |
| `ColltrlREDevelopmentCostAmount` |  | |  | `dev_cost` | `CURR(17)` | Development Cost Amount |
| `ColltrlREDevCostCurrency` |  | |  | `dev_cost_curr` | `CUKY(5)` | Dev Cost Currency |
| `ColltrlRELandCostBaseMeasure` |  | |  | `land_cst_base` | `CHAR(1)` | Base measure of Land |
| `ColltrlREDevCostBaseMeasure` |  | |  | `dev_cst_base` | `CHAR(1)` | Base measure of Land |
| `ColltrlREAddlLandCostAmount` |  | |  | `add_land_cst` | `CURR(17)` | Additional Land Cost Amount |
| `ColltrlREAddlLandCostCurrency` |  | |  | `add_cst_curr` | `CUKY(5)` | Additional Land Cost Currency |
| `ColltrlREAddlLandCostBaseMsr` |  | |  | `add_cst_base` | `CHAR(1)` | Base measure of Land |
| `ColltrlRECnstrctnCostAmount` |  | |  | `const_cost` | `CURR(17)` | Construction Cost |
| `ColltrlRECnstrctnCostCurrency` |  | |  | `const_cost_curr` | `CUKY(5)` | Construction cost currency |
| `ColltrlRECnstrctnCostBaseMsr` |  | |  | `base_meas` | `CHAR(1)` | Base Measure |
| `ColltrlREYrlyGrssProfitAmt` |  | |  | `grs_profit` | `CURR(17)` | Yearly Gross Profit |
| `ColltrlREYrlyGrssProfitCrcy` |  | |  | `grs_profit_curr` | `CUKY(5)` | Yearly Gross Profit Currency |
| `_ColltrlREPartMaster` | | ✓ | | | | |
| `_CollateralRealEstate` | | ✓ | | | | |
| `_CollateralRealEstateMaster` | | ✓ | | | | |
| `_ColltrlREPartAccessory` | | ✓ | | | | |
| `_ColltrlREPartAccessoryMaster` | | ✓ | | | | |
| `_ColltrlREPartPartner` | | ✓ | | | | |
| `_CollateralRealEstatePartCost` | | ✓ | | | | |
| `_ColltrlREPartValue` | | ✓ | | | | |
| `_ColltrlRELandRegister` | | ✓ | | | | |
| `_ObjectAssetData` | | ✓ | | | | |
| `_ColltrlREMainUsageType` | | ✓ | | | | |
| `_ColltrlREAdditionalUsageType1` | | ✓ | | | | |
| `_ColltrlREAdditionalUsageType2` | | ✓ | | | | |
| `_ColltrlREUtilization` | | ✓ | | | | |
| `_ColltrlREUsblAreaUoM` | | ✓ | | | | |
| `_ColltrlRERntdUsblAreaUoM` | | ✓ | | | | |
| `_ColltrlREUsblVolumeUoM` | | ✓ | | | | |
| `_ColltrlRERntdUsblVolumeUoM` | | ✓ | | | | |
| `_ColltrlRERsdntlAreaUoM` | | ✓ | | | | |
| `_ColltrlRESecdryAreaUoM` | | ✓ | | | | |
| `_ColltrlREOthAreaUnitOfMeasure` | | ✓ | | | | |
| `_ColltrlRELandAreaUoM` | | ✓ | | | | |
| `_ColltrlRERntdLandAreaUoM` | | ✓ | | | | |
| `_ColltrlRERsdntlPlndRentCrcy` | | ✓ | | | | |
| `_ColltrlRERsdntlActlRentCrcy` | | ✓ | | | | |
| `_ColltrlRERsdntlComparRentCrcy` | | ✓ | | | | |
| `_ColltrlREDailyAvgPriceCrcy` | | ✓ | | | | |
| `_ColltrlRETurnoverCurrency` | | ✓ | | | | |
| `_ColltrlREBldngPrgrsCurrency` | | ✓ | | | | |
| `_ColltrlREInsuranceCurrency` | | ✓ | | | | |
| `_ColltrlRERsdntlRatnCostCrcy` | | ✓ | | | | |
| `_ColltrlREExtLaytCostCrcy` | | ✓ | | | | |
| `_ColltrlRECommlRatnCostCrcy` | | ✓ | | | | |
| `_ColltrlREGrssColdRentCrcy` | | ✓ | | | | |
| `_ColltrlRENetColdRentCurrency` | | ✓ | | | | |
| `_ColltrlRECommlPlndRentCrcy` | | ✓ | | | | |
| `_ColltrlRECommlActlRentCrcy` | | ✓ | | | | |
| `_ColltrlRECommlComparRentCrcy` | | ✓ | | | | |
| `_ColltrlRELandPlndRentCurrency` | | ✓ | | | | |
| `_ColltrlRELandActlRentCurrency` | | ✓ | | | | |
| `_ColltrlRELandCostCurrency` | | ✓ | | | | |
| `_ColltrlREDevCostCurrency` | | ✓ | | | | |
| `_ColltrlREAddlLandCostCurrency` | | ✓ | | | | |
| `_ColltrlRECnstrctnCostCurrency` | | ✓ | | | | |
| `_ColltrlREYrlyGrssProfitCrcy` | | ✓ | | | | |
| `_ColltrlRERsdntlBasePeriod` | | ✓ | | | | |
| `_ColltrlRECommercialBasePeriod` | | ✓ | | | | |
| `_ColltrlRELandRentBasePeriod` | | ✓ | | | | |
| `_ColltrlRERsdntlBaseMeasure` | | ✓ | | | | |
| `_ColltrlRECommlBaseMeasure` | | ✓ | | | | |
| `_ColltrlRELandRentBaseMeasure` | | ✓ | | | | |
| `_ColltrlRECnstrctnCostBaseMsr` | | ✓ | | | | |
| `_ColltrlREBuildingPartType` | | ✓ | | | | |
| `_ColltrlRealEstatePrtCondition` | | ✓ | | | | |
| `_ColltrlREBuildingMethodRoof` | | ✓ | | | | |
| `_ColltrlREBuildingMethodBody` | | ✓ | | | | |
| `_ColltrlREBuildingMethodCellar` | | ✓ | | | | |
| `_ColltrlREBldngSctnDescription` | | ✓ | | | | |
| `_ColltrlREPriceCategory` | | ✓ | | | | |
| `_ColltrlRERentalAgreementType` | | ✓ | | | | |
| `_ColltrlREInsuranceType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ColltrlREPartMaster` | `I_ColltrlREPartMaster` | [0..1] |
| `_CollateralRealEstate` | `I_CollateralRealEstate` | [0..1] |
| `_CollateralRealEstateMaster` | `I_CollateralRealEstateMaster` | [0..1] |
| `_ColltrlREPartAccessory` | `I_ColltrlREPartAccessory` | [0..*] |
| `_ColltrlREPartAccessoryMaster` | `I_ColltrlREPartAccessoryMaster` | [0..*] |
| `_ColltrlREPartPartner` | `I_ColltrlREPartPartner` | [0..*] |
| `_CollateralRealEstatePartCost` | `I_CollateralRealEstatePartCost` | [0..*] |
| `_ColltrlREPartValue` | `I_ColltrlREPartValue` | [0..*] |
| `_ColltrlRELandRegister` | `I_ColltrlRELandRegister` | [0..*] |
| `_ObjectAssetData` | `I_ObjectAssetData` | [0..*] |
| `_ColltrlREMainUsageType` | `I_ColltrlREUsageType` | [0..1] |
| `_ColltrlREAdditionalUsageType1` | `I_ColltrlREUsageType` | [0..1] |
| `_ColltrlREAdditionalUsageType2` | `I_ColltrlREUsageType` | [0..1] |
| `_ColltrlREUtilization` | `I_ColltrlREUtilization` | [0..1] |
| `_ColltrlREUsblAreaUoM` | `I_UnitOfMeasure` | [0..1] |
| `_ColltrlRERntdUsblAreaUoM` | `I_UnitOfMeasure` | [0..1] |
| `_ColltrlREUsblVolumeUoM` | `I_UnitOfMeasure` | [0..1] |
| `_ColltrlRERntdUsblVolumeUoM` | `I_UnitOfMeasure` | [0..1] |
| `_ColltrlRERsdntlAreaUoM` | `I_UnitOfMeasure` | [0..1] |
| `_ColltrlRESecdryAreaUoM` | `I_UnitOfMeasure` | [0..1] |
| `_ColltrlREOthAreaUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_ColltrlRELandAreaUoM` | `I_UnitOfMeasure` | [0..1] |
| `_ColltrlRERntdLandAreaUoM` | `I_UnitOfMeasure` | [0..1] |
| `_ColltrlRERsdntlPlndRentCrcy` | `I_Currency` | [0..1] |
| `_ColltrlRERsdntlActlRentCrcy` | `I_Currency` | [0..1] |
| `_ColltrlRERsdntlComparRentCrcy` | `I_Currency` | [0..1] |
| `_ColltrlREDailyAvgPriceCrcy` | `I_Currency` | [0..1] |
| `_ColltrlRETurnoverCurrency` | `I_Currency` | [0..1] |
| `_ColltrlREBldngPrgrsCurrency` | `I_Currency` | [0..1] |
| `_ColltrlREInsuranceCurrency` | `I_Currency` | [0..1] |
| `_ColltrlRERsdntlRatnCostCrcy` | `I_Currency` | [0..1] |
| `_ColltrlREExtLaytCostCrcy` | `I_Currency` | [0..1] |
| `_ColltrlRECommlRatnCostCrcy` | `I_Currency` | [0..1] |
| `_ColltrlREGrssColdRentCrcy` | `I_Currency` | [0..1] |
| `_ColltrlRENetColdRentCurrency` | `I_Currency` | [0..1] |
| `_ColltrlRECommlPlndRentCrcy` | `I_Currency` | [0..1] |
| `_ColltrlRECommlActlRentCrcy` | `I_Currency` | [0..1] |
| `_ColltrlRECommlComparRentCrcy` | `I_Currency` | [0..1] |
| `_ColltrlRELandPlndRentCurrency` | `I_Currency` | [0..1] |
| `_ColltrlRELandActlRentCurrency` | `I_Currency` | [0..1] |
| `_ColltrlRELandCostCurrency` | `I_Currency` | [0..1] |
| `_ColltrlREDevCostCurrency` | `I_Currency` | [0..1] |
| `_ColltrlREAddlLandCostCurrency` | `I_Currency` | [0..1] |
| `_ColltrlRECnstrctnCostCurrency` | `I_Currency` | [0..1] |
| `_ColltrlREYrlyGrssProfitCrcy` | `I_Currency` | [0..1] |
| `_ColltrlRERsdntlBasePeriod` | `I_ColltrlREBasePeriod` | [0..1] |
| `_ColltrlRECommercialBasePeriod` | `I_ColltrlREBasePeriod` | [0..1] |
| `_ColltrlRELandRentBasePeriod` | `I_ColltrlREBasePeriod` | [0..1] |
| `_ColltrlRERsdntlBaseMeasure` | `I_ColltrlREBaseMeasure` | [0..1] |
| `_ColltrlRECommlBaseMeasure` | `I_ColltrlREBaseMeasure` | [0..1] |
| `_ColltrlRELandRentBaseMeasure` | `I_ColltrlREBaseMeasure` | [0..1] |
| `_ColltrlRECnstrctnCostBaseMsr` | `I_ColltrlREBaseMeasure` | [0..1] |
| `_ColltrlREBuildingPartType` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlRealEstatePrtCondition` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlREBuildingMethodRoof` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlREBuildingMethodBody` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlREBuildingMethodCellar` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlREBldngSctnDescription` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlREPriceCategory` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlRERentalAgreementType` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlREInsuranceType` | `I_CollateralAttributeIndType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEPART')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEPART')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICREPART',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,                         
    representativeKey: 'CollateralRealEstatePartUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping: [ {
             table : 'CMS_RE_OBJ_PRT',
             role : #MAIN,
             viewElement : ['CollateralRealEstatePartUUID'],
             tableElement : ['OBJ_PRT_GUID']
        } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Part Details for Collateral Real Estate'
define view I_CollateralRealEstatePart
  as select from P_RealEstatePrt_TF(P_SAPClient : $session.client)
  association [0..1] to I_ColltrlREPartMaster          as _ColltrlREPartMaster           on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartMaster.CollateralRealEstatePartUUID
  association [0..1] to I_CollateralRealEstate         as _CollateralRealEstate          on  $projection.CollateralRealEstateUUID = _CollateralRealEstate.CollateralRealEstateUUID
  association [0..1] to I_CollateralRealEstateMaster   as _CollateralRealEstateMaster    on  $projection.CollateralRealEstateUUID = _CollateralRealEstateMaster.CollateralRealEstateUUID
  association [0..*] to I_ColltrlREPartAccessory       as _ColltrlREPartAccessory        on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartAccessory.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartAccessoryMaster as _ColltrlREPartAccessoryMaster  on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartAccessoryMaster.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartPartner         as _ColltrlREPartPartner          on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartPartner.CollateralRealEstatePartUUID
  association [0..*] to I_CollateralRealEstatePartCost as _CollateralRealEstatePartCost  on  $projection.CollateralRealEstatePartUUID = _CollateralRealEstatePartCost.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartValue           as _ColltrlREPartValue            on  $projection.CollateralRealEstatePartUUID = _ColltrlREPartValue.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlRELandRegister        as _ColltrlRELandRegister         on  $projection.CollateralRealEstatePartUUID = _ColltrlRELandRegister.CollateralRealEstatePartUUID
  association [0..*] to I_ObjectAssetData              as _ObjectAssetData               on  $projection.ColltrlREPartConvertedID = _ObjectAssetData.ObjectAssetReferenceNumber
  association [0..1] to I_ColltrlREUsageType           as _ColltrlREMainUsageType        on  $projection.ColltrlREMainUsageType = _ColltrlREMainUsageType.CollateralRealEstateUsageType
  association [0..1] to I_ColltrlREUsageType           as _ColltrlREAdditionalUsageType1 on  $projection.ColltrlREAdditionalUsageType1 = _ColltrlREAdditionalUsageType1.CollateralRealEstateUsageType
  association [0..1] to I_ColltrlREUsageType           as _ColltrlREAdditionalUsageType2 on  $projection.ColltrlREAdditionalUsageType2 = _ColltrlREAdditionalUsageType2.CollateralRealEstateUsageType
  association [0..1] to I_ColltrlREUtilization         as _ColltrlREUtilization          on  $projection.ColltrlRealEstateUtilization = _ColltrlREUtilization.ColltrlRealEstateUtilization
  association [0..1] to I_UnitOfMeasure                as _ColltrlREUsblAreaUoM          on  $projection.ColltrlREUsblAreaUoM = _ColltrlREUsblAreaUoM.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ColltrlRERntdUsblAreaUoM      on  $projection.ColltrlRERntdUsblAreaUoM = _ColltrlRERntdUsblAreaUoM.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ColltrlREUsblVolumeUoM        on  $projection.ColltrlREUsblVolumeUoM = _ColltrlREUsblVolumeUoM.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ColltrlRERntdUsblVolumeUoM    on  $projection.ColltrlRERntdUsblVolumeUoM = _ColltrlRERntdUsblVolumeUoM.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ColltrlRERsdntlAreaUoM        on  $projection.ColltrlRERsdntlAreaUoM = _ColltrlRERsdntlAreaUoM.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ColltrlRESecdryAreaUoM        on  $projection.ColltrlRESecdryAreaUoM = _ColltrlRESecdryAreaUoM.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ColltrlREOthAreaUnitOfMeasure on  $projection.ColltrlREOthAreaUnitOfMeasure = _ColltrlREOthAreaUnitOfMeasure.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ColltrlRELandAreaUoM          on  $projection.ColltrlRELandAreaUnitOfMeasure = _ColltrlRELandAreaUoM.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ColltrlRERntdLandAreaUoM      on  $projection.ColltrlRERntdLandAreaUoM = _ColltrlRERntdLandAreaUoM.UnitOfMeasure
  association [0..1] to I_Currency                     as _ColltrlRERsdntlPlndRentCrcy   on  $projection.ColltrlRERsdntlPlndRentCrcy = _ColltrlRERsdntlPlndRentCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlRERsdntlActlRentCrcy   on  $projection.ColltrlRERsdntlActlRentCrcy = _ColltrlRERsdntlActlRentCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlRERsdntlComparRentCrcy on  $projection.ColltrlRERsdntlComparRentCrcy = _ColltrlRERsdntlComparRentCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlREDailyAvgPriceCrcy    on  $projection.ColltrlREDailyAvgPriceCurrency = _ColltrlREDailyAvgPriceCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlRETurnoverCurrency     on  $projection.ColltrlRETurnoverCurrency = _ColltrlRETurnoverCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlREBldngPrgrsCurrency    on  $projection.ColltrlREBldngProgressCurrency = _ColltrlREBldngPrgrsCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlREInsuranceCurrency    on  $projection.ColltrlREInsuranceCurrency = _ColltrlREInsuranceCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlRERsdntlRatnCostCrcy   on  $projection.ColltrlRERsdntlRatnCostCrcy = _ColltrlRERsdntlRatnCostCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlREExtLaytCostCrcy    on  $projection.ColltrlREExtLayoutCostCurrency = _ColltrlREExtLaytCostCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlRECommlRatnCostCrcy    on  $projection.ColltrlRECommlRatnCostCurrency = _ColltrlRECommlRatnCostCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlREGrssColdRentCrcy    on  $projection.ColltrlREGrossColdRentCurrency = _ColltrlREGrssColdRentCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlRENetColdRentCurrency  on  $projection.ColltrlRENetColdRentCurrency = _ColltrlRENetColdRentCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlRECommlPlndRentCrcy    on  $projection.ColltrlRECommlPlndRentCurrency = _ColltrlRECommlPlndRentCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlRECommlActlRentCrcy    on  $projection.ColltrlRECommlActlRentCurrency = _ColltrlRECommlActlRentCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlRECommlComparRentCrcy  on  $projection.ColltrlRECommlComparRentCrcy = _ColltrlRECommlComparRentCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlRELandPlndRentCurrency on  $projection.ColltrlRELandPlndRentCurrency = _ColltrlRELandPlndRentCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlRELandActlRentCurrency on  $projection.ColltrlRELandActlRentCurrency = _ColltrlRELandActlRentCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlRELandCostCurrency     on  $projection.ColltrlRELandCostCurrency = _ColltrlRELandCostCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlREDevCostCurrency      on  $projection.ColltrlREDevCostCurrency = _ColltrlREDevCostCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlREAddlLandCostCurrency on  $projection.ColltrlREAddlLandCostCurrency = _ColltrlREAddlLandCostCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlRECnstrctnCostCurrency on  $projection.ColltrlRECnstrctnCostCurrency = _ColltrlRECnstrctnCostCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlREYrlyGrssProfitCrcy   on  $projection.ColltrlREYrlyGrssProfitCrcy = _ColltrlREYrlyGrssProfitCrcy.Currency
  association [0..1] to I_ColltrlREBasePeriod          as _ColltrlRERsdntlBasePeriod     on  $projection.ColltrlREResidentialBasePeriod = _ColltrlRERsdntlBasePeriod.CollateralRealEstateBasePeriod
  association [0..1] to I_ColltrlREBasePeriod          as _ColltrlRECommercialBasePeriod on  $projection.ColltrlRECommercialBasePeriod = _ColltrlRECommercialBasePeriod.CollateralRealEstateBasePeriod
  association [0..1] to I_ColltrlREBasePeriod          as _ColltrlRELandRentBasePeriod   on  $projection.ColltrlRELandRentBasePeriod = _ColltrlRELandRentBasePeriod.CollateralRealEstateBasePeriod
  association [0..1] to I_ColltrlREBaseMeasure         as _ColltrlRERsdntlBaseMeasure    on  $projection.ColltrlRERsdntlBaseMeasure = _ColltrlRERsdntlBaseMeasure.ColltrlRealEstateBaseMeasure
  association [0..1] to I_ColltrlREBaseMeasure         as _ColltrlRECommlBaseMeasure    on  $projection.ColltrlRECommercialBaseMeasure = _ColltrlRECommlBaseMeasure.ColltrlRealEstateBaseMeasure
  association [0..1] to I_ColltrlREBaseMeasure         as _ColltrlRELandRentBaseMeasure  on  $projection.ColltrlRELandRentBaseMeasure = _ColltrlRELandRentBaseMeasure.ColltrlRealEstateBaseMeasure
  association [0..1] to I_ColltrlREBaseMeasure         as _ColltrlRECnstrctnCostBaseMsr  on  $projection.ColltrlRECnstrctnCostBaseMsr = _ColltrlRECnstrctnCostBaseMsr.ColltrlRealEstateBaseMeasure

  association [0..1] to I_CollateralAttributeIndType   as _ColltrlREBuildingPartType     on  $projection.ColltrlREBuildingPartType                = _ColltrlREBuildingPartType.CollateralAttributeIndType
                                                                                         and _ColltrlREBuildingPartType.CollateralAttributeIndCat = 'REO006'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlRealEstatePrtCondition on  $projection.ColltrlRealEstatePartCondition               = _ColltrlRealEstatePrtCondition.CollateralAttributeIndType
                                                                                         and _ColltrlRealEstatePrtCondition.CollateralAttributeIndCat = 'REO001'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlREBuildingMethodRoof   on  $projection.ColltrlREBuildingMethodRoof                = _ColltrlREBuildingMethodRoof.CollateralAttributeIndType
                                                                                         and _ColltrlREBuildingMethodRoof.CollateralAttributeIndCat = 'REO007'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlREBuildingMethodBody   on  $projection.ColltrlREBuildingMethodBody                = _ColltrlREBuildingMethodBody.CollateralAttributeIndType
                                                                                         and _ColltrlREBuildingMethodBody.CollateralAttributeIndCat = 'REO008'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlREBuildingMethodCellar on  $projection.ColltrlREBuildingMethodCellar                = _ColltrlREBuildingMethodCellar.CollateralAttributeIndType
                                                                                         and _ColltrlREBuildingMethodCellar.CollateralAttributeIndCat = 'REO009'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlREBldngSctnDescription on  $projection.ColltrlREBldngSctnDescription                = _ColltrlREBldngSctnDescription.CollateralAttributeIndType
                                                                                         and _ColltrlREBldngSctnDescription.CollateralAttributeIndCat = 'REO015'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlREPriceCategory        on  $projection.ColltrlRealEstatePriceCategory        = _ColltrlREPriceCategory.CollateralAttributeIndType
                                                                                         and _ColltrlREPriceCategory.CollateralAttributeIndCat = 'REO013'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlRERentalAgreementType  on  $projection.ColltrlRERentalAgreementType                = _ColltrlRERentalAgreementType.CollateralAttributeIndType
                                                                                         and _ColltrlRERentalAgreementType.CollateralAttributeIndCat = 'REO014'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlREInsuranceType        on  $projection.ColltrlRealEstateInsuranceType        = _ColltrlREInsuranceType.CollateralAttributeIndType
                                                                                         and _ColltrlREInsuranceType.CollateralAttributeIndCat = 'REO011'
{
  key obj_prt_guid      as CollateralRealEstatePartUUID,
      obj_prt_guid_conv as ColltrlREPartConvertedID,
      obj_guid          as CollateralRealEstateUUID,
      part_id           as CollateralRealEstatePartID,
      @ObjectModel.foreignKey.association: '_ColltrlREBuildingPartType'
      bld_part_type     as ColltrlREBuildingPartType,
      @ObjectModel.foreignKey.association: '_ColltrlRealEstatePrtCondition'
      part_cond         as ColltrlRealEstatePartCondition,
      @ObjectModel.foreignKey.association: '_ColltrlREMainUsageType'
      main_usage        as ColltrlREMainUsageType,
      @ObjectModel.foreignKey.association: '_ColltrlREAdditionalUsageType1'
      add_usage_1       as ColltrlREAdditionalUsageType1,
      @ObjectModel.foreignKey.association: '_ColltrlREAdditionalUsageType2'
      add_usage_2       as ColltrlREAdditionalUsageType2,
      @ObjectModel.foreignKey.association: '_ColltrlREBuildingMethodRoof'
      bld_method_roof   as ColltrlREBuildingMethodRoof,
      @ObjectModel.foreignKey.association: '_ColltrlREBuildingMethodBody'
      bld_method_body   as ColltrlREBuildingMethodBody,
      @ObjectModel.foreignKey.association: '_ColltrlREBuildingMethodCellar'
      bld_metd_cellar   as ColltrlREBuildingMethodCellar,
      @ObjectModel.foreignKey.association: '_ColltrlREUtilization'
      utilization       as ColltrlRealEstateUtilization,
      part_desc         as ColltrlREPartDescription,
      comm_usage_pct    as ColltrlRECommlUsagePercent,
      @Semantics.booleanIndicator:true
      other_usg_flg     as ColltrlREIsOtherUsagePossible,
      ref_obj_prt_guid  as ColltrlREReferencePartUUID,
      @Semantics.booleanIndicator: true
      is_sub_ast_crea   as ColltrlREIsSubAssetCreated,
      @Semantics.quantity.unitOfMeasure: 'ColltrlREUsblAreaUoM'
      useful_area       as ColltrlREUsableAreaSize,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ColltrlREUsblAreaUoM'
      usbl_area_uom     as ColltrlREUsblAreaUoM,
      @Semantics.quantity.unitOfMeasure: 'ColltrlRERntdUsblAreaUoM'
      useful_area_ren   as ColltrlRERentedUsableAreaSize,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ColltrlRERntdUsblAreaUoM'
      usbl_ar_ren_uom   as ColltrlRERntdUsblAreaUoM,
      @Semantics.quantity.unitOfMeasure: 'ColltrlREUsblVolumeUoM'
      useful_vol        as ColltrlRealEstateUsableVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ColltrlREUsblVolumeUoM'
      usbl_vol_uom      as ColltrlREUsblVolumeUoM,
      @Semantics.quantity.unitOfMeasure: 'ColltrlRERntdUsblVolumeUoM'
      useful_vol_ren    as ColltrlRERentedUsableVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ColltrlRERntdUsblVolumeUoM'
      usbl_vl_ren_uom   as ColltrlRERntdUsblVolumeUoM,
      @Semantics.quantity.unitOfMeasure: 'ColltrlRERsdntlAreaUoM'
      residential_area  as ColltrlREResidentialAreaSize,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ColltrlRERsdntlAreaUoM'
      res_ar_uom        as ColltrlRERsdntlAreaUoM,
      @Semantics.quantity.unitOfMeasure: 'ColltrlRESecdryAreaUoM'
      secondary_area    as ColltrlRESecondaryAreaSize,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ColltrlRESecdryAreaUoM'
      sec_area_uom      as ColltrlRESecdryAreaUoM,
      @Semantics.quantity.unitOfMeasure: 'ColltrlREOthAreaUnitOfMeasure'
      other_area        as ColltrlREOtherAreaSize,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ColltrlREOthAreaUnitOfMeasure'
      oth_area_uom      as ColltrlREOthAreaUnitOfMeasure,
      no_prt_unit       as ColltrlRENumberOfBuildingPart,
      no_prt_unit_ren   as ColltrlRENmbrOfBldngPartRented,
      cons_start_date   as ColltrlREConstructionStartDate,
      permsn_appl_date  as ColltrlREPermissionAppliedDate,
      permsn_obtd_date  as ColltrlREPrmssnObtainedDate,
      occy_date         as ColltrlRealEstateOccupancyDate,
      comp_date         as ColltrlRECompletionDate,
      final_insp_date   as ColltrlREFinalInspectionDate,
      @Semantics.amount.currencyCode: 'ColltrlRERsdntlPlndRentCrcy'
      rent_amt_planned  as ColltrlRERsdntlPlndRentAmount,
      @Semantics.amount.currencyCode: 'ColltrlRERsdntlActlRentCrcy'
      rent_amt_actual   as ColltrlRERsdntlActlRentAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRERsdntlPlndRentCrcy'
      rent_plan_curr    as ColltrlRERsdntlPlndRentCrcy,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRERsdntlActlRentCrcy'
      rent_act_curr     as ColltrlRERsdntlActlRentCrcy,
      @ObjectModel.foreignKey.association: '_ColltrlRERsdntlBasePeriod'
      base_period       as ColltrlREResidentialBasePeriod,
      @ObjectModel.foreignKey.association: '_ColltrlRERsdntlBaseMeasure'
      base_measure      as ColltrlRERsdntlBaseMeasure,
      vacant_posn_pct   as ColltrlRERsdntlVacancyPercent,
      res_rent_ind      as ColltrlREResidentialRentType,
      @Semantics.amount.currencyCode: 'ColltrlRERsdntlComparRentCrcy'
      comp_rent_res     as ColltrlRERsdntlComparRentAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRERsdntlComparRentCrcy'
      com_ren_res_curr  as ColltrlRERsdntlComparRentCrcy,
      @Semantics.quantity.unitOfMeasure: 'ColltrlRELandAreaUnitOfMeasure'
      land_area         as ColltrlRealEstateLandAreaSize,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ColltrlRELandAreaUoM'
      land_area_uom     as ColltrlRELandAreaUnitOfMeasure,
      @Semantics.quantity.unitOfMeasure: 'ColltrlRERntdLandAreaUoM'
      land_area_ren     as ColltrlRERentedLandAreaSize,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ColltrlRERntdLandAreaUoM'
      land_ar_ren_uom   as ColltrlRERntdLandAreaUoM,
      no_of_units       as ColltrlRealEstateNumberOfUnits,
      no_of_floors      as ColltrlRENumberOfFloors,
      no_garages        as ColltrlRENumberOfGarages,
      no_garages_ren    as ColltrlRENumberOfGaragesRented,
      no_park_unit      as ColltrlRENumberOfParking,
      no_park_unit_ren  as ColltrlRENumberOfParkingRented,
      no_park_ug        as ColltrlRENmbrOfUndrGrndParking,
      no_park_ug_ren    as ColltrlRENrOfUndrGrndPrkngRntd,
      no_cur_units      as ColltrlRENumberOfCurrentUnits,
      no_cur_units_ren  as ColltrlRENmbrOfCurUnitsRented,
      no_old_units      as ColltrlRENumberOfOldUnits,
      no_old_units_ren  as ColltrlRENmbrOfOldUnitsRented,
      no_new_units      as ColltrlRENumberOfNewUnits,
      no_new_units_ren  as ColltrlRENmbrOfNewUnitsRented,
      no_access_str     as ColltrlRENrOfAccessStructures,
      no_sale_level     as ColltrlRENumberOfSaleLevel,
      no_of_rooms       as ColltrlRealEstateNumberOfRooms,
      no_of_beds        as ColltrlRealEstateNumberOfBeds,
      comm_env_desc     as ColltrlRECommlEnvrmtDesc,
      access_str_desc   as ColltrlREAccStrucDescription,
      @ObjectModel.foreignKey.association: '_ColltrlREBldngSctnDescription'
      bld_section_desc  as ColltrlREBldngSctnDescription,
      @ObjectModel.foreignKey.association: '_ColltrlREPriceCategory'
      price_category    as ColltrlRealEstatePriceCategory,
      @Semantics.amount.currencyCode: 'ColltrlREDailyAvgPriceCurrency'
      avg_price         as ColltrlREDailyAvgPriceAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlREDailyAvgPriceCrcy'
      avg_price_curr    as ColltrlREDailyAvgPriceCurrency,
      occupancy_pct     as ColltrlREOccupancyPercent,
      @Semantics.amount.currencyCode: 'ColltrlRETurnoverCurrency'
      turnover_amt      as ColltrlRETurnoverAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRETurnoverCurrency'
      turnover_curr     as ColltrlRETurnoverCurrency,
      @ObjectModel.foreignKey.association: '_ColltrlRERentalAgreementType'
      rental_agmt_typ   as ColltrlRERentalAgreementType,
      last_report_date  as ColltrlRECnstrctnLastRptDate,
      @Semantics.amount.currencyCode: 'ColltrlREBldngProgressCurrency'
      bld_progress_amt  as ColltrlREBldngProgressAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlREBldngPrgrsCurrency'
      bld_amt_curr      as ColltrlREBldngProgressCurrency,
      pct_completed     as ColltrlREBldngCompltnPercent,
      @ObjectModel.foreignKey.association: '_ColltrlREInsuranceType'
      insurance_type    as ColltrlRealEstateInsuranceType,
      @Semantics.amount.currencyCode: 'ColltrlREInsuranceCurrency'
      insurance_amt     as ColltrlREInsuranceAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlREInsuranceCurrency'
      insurance_curr    as ColltrlREInsuranceCurrency,
      ins_validity      as ColltrlREInsuranceValidToDate,
      @Semantics.amount.currencyCode: 'ColltrlRERsdntlRatnCostCrcy'
      rationing_cost    as ColltrlRERsdntlRatnCostAmount,
      rtn_cst_pct       as ColltrlRERsdntlRatnCostPercent,
      @Semantics.amount.currencyCode: 'ColltrlREExtLayoutCostCurrency'
      ext_layout_cost   as ColltrlREExtLayoutCostAmount,
      ext_lay_cst_pct   as ColltrlREExtLayoutCostPercent,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRERsdntlRatnCostCrcy'
      rtn_cst_curr      as ColltrlRERsdntlRatnCostCrcy,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlREExtLaytCostCrcy'
      ext_rtn_cst_curr  as ColltrlREExtLayoutCostCurrency,
      @Semantics.amount.currencyCode: 'ColltrlRECommlRatnCostCurrency'
      rtn_cst_com       as ColltrlRECommlRationCostAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRECommlRatnCostCrcy'
      rtn_cst_com_curr  as ColltrlRECommlRatnCostCurrency,
      rtn_cst_com_pct   as ColltrlRECommlRatnCostPercent,
      @Semantics.amount.currencyCode: 'ColltrlREGrossColdRentCurrency'
      gross_cold_rent   as ColltrlREGrossColdRentAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlREGrssColdRentCrcy'
      gross_rent_curr   as ColltrlREGrossColdRentCurrency,
      @Semantics.amount.currencyCode: 'ColltrlRENetColdRentCurrency'
      net_cold_rent     as ColltrlRENetColdRentAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRENetColdRentCurrency'
      net_rent_curr     as ColltrlRENetColdRentCurrency,
      created_by        as CollateralRealEstateEnteredBy,
      created_date      as ColltrlRealEstateEnteredDate,
      created_time      as ColltrlRealEstateEnteredTime,
      entry_src         as ColltrlRealEstateEnteredSource,
      last_chg_by       as ColltrlRealEstateLastChangedBy,
      last_chg_date     as ColltrlRELastChangedDate,
      last_chg_time     as ColltrlRELastChangedTime,
      processing_src    as ColltrlRELastChangedSource,
      no_of_years_com   as ColRECommlNmbrOfYrsLastValn,
      int_rate_com      as ColltrlRECommlValnInterestRate,
      no_of_years       as ColltrlRERsdntlLastValnNrOfYrs,
      int_rate          as ColltrlRERsdntlValnIntrstRate,
      @Semantics.amount.currencyCode: 'ColltrlRECommlPlndRentCurrency'
      rent_planned_com  as ColltrlRECommlPlndRentAmount,
      @Semantics.amount.currencyCode: 'ColltrlRECommlActlRentCurrency'
      rent_actual_com   as ColltrlRECommlActualRentAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRECommlPlndRentCrcy'
      plan_curr_com     as ColltrlRECommlPlndRentCurrency,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRECommlActlRentCrcy'
      act_curr_com      as ColltrlRECommlActlRentCurrency,
      @ObjectModel.foreignKey.association: '_ColltrlRECommercialBasePeriod'
      base_period_com   as ColltrlRECommercialBasePeriod,
      @ObjectModel.foreignKey.association: '_ColltrlRECommlBaseMeasure'
      base_meas_com     as ColltrlRECommercialBaseMeasure,
      com_rent_ind      as ColltrlRECommercialRentType,
      @Semantics.amount.currencyCode: 'ColltrlRECommlComparRentCrcy'
      comp_rent_com     as ColltrlRECommlComparRentAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRECommlComparRentCrcy'
      comp_ren_com_cur  as ColltrlRECommlComparRentCrcy,
      @Semantics.amount.currencyCode: 'ColltrlRELandPlndRentCurrency'
      plan_rent_land    as ColltrlRELandPlannedRentAmount,
      @Semantics.amount.currencyCode: 'ColltrlRELandActlRentCurrency'
      actual_rent_land  as ColltrlRELandActualRentAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRELandPlndRentCurrency'
      plan_rent_curr    as ColltrlRELandPlndRentCurrency,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRELandActlRentCurrency'
      actual_rent_curr  as ColltrlRELandActlRentCurrency,
      @ObjectModel.foreignKey.association: '_ColltrlRELandRentBasePeriod'
      base_period_land  as ColltrlRELandRentBasePeriod,
      @ObjectModel.foreignKey.association: '_ColltrlRELandRentBaseMeasure'
      base_meas_land    as ColltrlRELandRentBaseMeasure,
      depr              as ColltrlREDepreciationPercent,
      @Semantics.amount.currencyCode: 'ColltrlRELandCostCurrency'
      land_cost         as ColltrlRELandCostAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRELandCostCurrency'
      land_cost_curr    as ColltrlRELandCostCurrency,
      @Semantics.amount.currencyCode: 'ColltrlREDevCostCurrency'
      dev_cost          as ColltrlREDevelopmentCostAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlREDevCostCurrency'
      dev_cost_curr     as ColltrlREDevCostCurrency,
      land_cst_base     as ColltrlRELandCostBaseMeasure,
      dev_cst_base      as ColltrlREDevCostBaseMeasure,
      @Semantics.amount.currencyCode: 'ColltrlREAddlLandCostCurrency'
      add_land_cst      as ColltrlREAddlLandCostAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlREAddlLandCostCurrency'
      add_cst_curr      as ColltrlREAddlLandCostCurrency,
      add_cst_base      as ColltrlREAddlLandCostBaseMsr,
      @Semantics.amount.currencyCode: 'ColltrlRECnstrctnCostCurrency'
      const_cost        as ColltrlRECnstrctnCostAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlRECnstrctnCostCurrency'
      const_cost_curr   as ColltrlRECnstrctnCostCurrency,
      @ObjectModel.foreignKey.association: '_ColltrlRECnstrctnCostBaseMsr'
      base_meas         as ColltrlRECnstrctnCostBaseMsr,
      @Semantics.amount.currencyCode: 'ColltrlREYrlyGrssProfitCrcy'
      grs_profit        as ColltrlREYrlyGrssProfitAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlREYrlyGrssProfitCrcy'
      grs_profit_curr   as ColltrlREYrlyGrssProfitCrcy,

      _ColltrlREPartMaster,
      _CollateralRealEstate,
      _CollateralRealEstateMaster,
      _ColltrlREPartAccessory,
      _ColltrlREPartAccessoryMaster,
      _ColltrlREPartPartner,
      _CollateralRealEstatePartCost,
      _ColltrlREPartValue,
      _ColltrlRELandRegister,
      _ObjectAssetData,
      _ColltrlREMainUsageType,
      _ColltrlREAdditionalUsageType1,
      _ColltrlREAdditionalUsageType2,
      _ColltrlREUtilization,
      _ColltrlREUsblAreaUoM,
      _ColltrlRERntdUsblAreaUoM,
      _ColltrlREUsblVolumeUoM,
      _ColltrlRERntdUsblVolumeUoM,
      _ColltrlRERsdntlAreaUoM,
      _ColltrlRESecdryAreaUoM,
      _ColltrlREOthAreaUnitOfMeasure,
      _ColltrlRELandAreaUoM,
      _ColltrlRERntdLandAreaUoM,
      _ColltrlRERsdntlPlndRentCrcy,
      _ColltrlRERsdntlActlRentCrcy,
      _ColltrlRERsdntlComparRentCrcy,
      _ColltrlREDailyAvgPriceCrcy,
      _ColltrlRETurnoverCurrency,
      _ColltrlREBldngPrgrsCurrency,
      _ColltrlREInsuranceCurrency,
      _ColltrlRERsdntlRatnCostCrcy,
      _ColltrlREExtLaytCostCrcy,
      _ColltrlRECommlRatnCostCrcy,
      _ColltrlREGrssColdRentCrcy,
      _ColltrlRENetColdRentCurrency,
      _ColltrlRECommlPlndRentCrcy,
      _ColltrlRECommlActlRentCrcy,
      _ColltrlRECommlComparRentCrcy,
      _ColltrlRELandPlndRentCurrency,
      _ColltrlRELandActlRentCurrency,
      _ColltrlRELandCostCurrency,
      _ColltrlREDevCostCurrency,
      _ColltrlREAddlLandCostCurrency,
      _ColltrlRECnstrctnCostCurrency,
      _ColltrlREYrlyGrssProfitCrcy,
      _ColltrlRERsdntlBasePeriod,
      _ColltrlRECommercialBasePeriod,
      _ColltrlRELandRentBasePeriod,
      _ColltrlRERsdntlBaseMeasure,
      _ColltrlRECommlBaseMeasure,
      _ColltrlRELandRentBaseMeasure,
      _ColltrlRECnstrctnCostBaseMsr,
      _ColltrlREBuildingPartType,
      _ColltrlRealEstatePrtCondition,
      _ColltrlREBuildingMethodRoof,
      _ColltrlREBuildingMethodBody,
      _ColltrlREBuildingMethodCellar,
      _ColltrlREBldngSctnDescription,
      _ColltrlREPriceCategory,
      _ColltrlRERentalAgreementType,
      _ColltrlREInsuranceType
}
```
